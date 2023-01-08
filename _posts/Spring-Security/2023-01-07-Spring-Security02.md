---
layout: single
title: "userDetails, 영속화 관련 예외"
categories: 
    - Spring Security
tag: [Spring Security user 영속화 관련 예외]
---


이 글은, Spring Security 사용 중, 유저의 인증이 완료된  
@AuthenticationPrincipal UserDetailsImpl userDetails를

컨트롤러 -> 서비스로 넘겨 유저 정보를 활용하고,  
다시 서비스 -> 컨트롤러로 응답될 때 발생하는 아래의 에러로 인해 작성하였습니다.


<details>   
<summary>발생 워닝</summary>
<div markdown="1">             

2023-01-07 19:58:31.265  WARN 26751 --- [nio-8080-exec-4] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.http.converter.HttpMessageNotWritableException: Could not write JSON: failed to lazily initialize a collection of role: com.sparta.myselectshopsecurity.entity.User.folders, could not initialize proxy - no Session; nested exception is com.fasterxml.jackson.databind.JsonMappingException: failed to lazily initialize a collection of role: com.sparta.myselectshopsecurity.entity.User.folders, could not initialize proxy - no Session (through reference chain: java.util.ArrayList[0]->com.sparta.myselectshopsecurity.entity.Folder["user"]->com.sparta.myselectshopsecurity.entity.User["folders"])]         

</div>
</details>


<hr>

유저의 인증이 완료된 상태에서  
1명의 user가 N 개의 폴더를 추가하는 상황입니다.


<hr>

```java
@PostMapping("/folders")
    public List<Folder> addFolders(
            @RequestBody FolderRequestDto folderRequestDto,
            @AuthenticationPrincipal UserDetailsImpl userDetails
    ) {

        List<String> folderNames = folderRequestDto.getFolderNames();

                                                  
        return folderService.addFolders(folderNames,userDetails.getUser());
    }
```

```java
   @Transactional                                            
    public List<Folder> addFolders(List<String> folderNames, User user) {

    
        List<Folder> existFolderList = folderRepository.findAllByUserAndNameIn(user, folderNames);

        List<Folder> folderList = new ArrayList<>();

        for (String folderName : folderNames) {
         
            if (!isExistFolderName(folderName, existFolderList)) {
                Folder folder = new Folder(folderName, user);
                folderList.add(folder);
            }
        }
        return folderRepository.saveAll(folderList);
    }
```

<hr>


일단 로그를 보고 추측하여, 아래처럼 FetchType.EAGER로 바꾸니  
폴더 추가 시 아까와 다르게 예외가 발생하지 않고 동작합니다.

![](../../images/2023-01-07-20-11-43.png)

<hr>

하지만 알려진 바와 같이, fetch = FetchType.EAGER를 사용할 경우
아래와 같이 N+1문제가 발생합니다. 


![](../../images/2023-01-07-21-12-25.png)

<hr>

그럼 더 좋은 방법이 없나 알아볼까요?

## 해결 방법들

추천하지 않는 방법들입니다.  
- FetchType.EAGER로 사용합니다.
동작은 하지만 N+1문제를 일으키며, 현재 여러 가지 폴더를 추가할 수 있는
상황이므로, 여러 유저가 많은 폴더를 추가할 때, 얼마나 많은 쿼리가 나올까요?
아마 실제 서버에서는 사용하지 못할 것입니다.

- 기존 코드처럼 서비스에서 Entity를 다시 불러와 사용합니다.
동작하는 데는 문제없고 좋지만, 유저가 이미 있는데 다시 불러오는 것이 비효율적이고,
이러면 Spring Security를 왜 쓰지?라는 생각이 드네요.

<hr>

추천하는 방법입니다.  
- OSIV(Open Session In View)라는 것을 이용해 해결합니다.
OSIV는 영속성 컨텍스트를 뷰까지 열어두는 기능입니다.
이 기능은 기본적으로 true로 설정되어 있지만, 인터셉터 단에서 동작하므로,

현재 Spring Security의 트랜잭션은 필터단에서 이루어지고 있기에,
무용지물입니다.

그래서 이러한 상황을 위해 필터단에서 OSIV를 설정해 줄 수 있는 클래스가 존재합니다.  

아래처럼 OpenEntityManagerInView를 Bean으로 등록하면 해결됩니다.

```java
@Component
@Configuration
public class OpenEntityManagerConfig {

    @Bean
    public FilterRegistrationBean<OpenEntityManagerInViewFilter> openEntityManagerInViewFilter() {
        FilterRegistrationBean<OpenEntityManagerInViewFilter> filterFilterRegistrationBean = new FilterRegistrationBean<>();
        filterFilterRegistrationBean.setFilter(new OpenEntityManagerInViewFilter());
        filterFilterRegistrationBean.setOrder(Integer.MIN_VALUE); // 예시를 위해 최우선 순위로 Filter 등록
        return filterFilterRegistrationBean;
    }

}
```

OpenEntityManagerInView가 Spring Security의 DelegatingFilterProxy보다 먼저 적용될 수 있게끔 Order를 설정하는 것을 잊지 말았으면 합니다!

이 설정을 추가하면 Lazy로 동작하는 연관 Entity를 조회할 때, 정상적으로 동작하는 것을 확인할 수 있으실 겁니다.

[추천 참조 글1](https://tecoble.techcourse.co.kr/post/2020-08-31-entity-lifecycle-1/)
[추천 참조 글2](https://tecoble.techcourse.co.kr/post/2020-09-20-entity-lifecycle-2/)
