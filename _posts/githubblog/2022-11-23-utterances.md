---
layout: single
title: "개발자, 깃허브 블로그 포트폴리오 만들기(맥북 M1)"
last_modified_at: 2022-11-22
categories: 
    - githubblog
tag: [github, blog]
toc: true
toc_label: "목차"
toc_sticky: true
author_profile: false
---
<div class="notice" style="text-align:center">
진행 환경<br>
- 2021, 맥북 프로 M1 Pro 14인치 모델 <br>
- Ventura 13.1 베타(22C5050e) 버전
</div>
---
<div class="notice--info" style="text-align:center">
목표<br>
minimal mistakes 테마 기반 깃허브 지킬 블로그 만들기
</div>

<br>

Utterances는 깃허브의 이슈


utterances로 사용할 댓글이 담길 레파지토리 생성 ( public로 만들기. )

저는 그냥 Utterances로 만들었습니다.



![](../../images/2022-11-23-10-06-34.png)

![](../../images/utterances.png)



Ufferances전용으로 만든 레파지토리주소를 아래에 입력해준다.

![](../../images/2022-11-23-10-17-45.png)

https://utteranc.es/?installation_id=31487720&setup_action=install


![](../../images/2022-11-23-10-18-22.png)

참조 블로그
https://computasha.github.io/etc-utterances/
https://ansohxxn.github.io/blog/utterances/


mapping 하기.
깃허브 블로그 와 깃허브 이슈를 연결해줄 매핑 방식을 선택해야한다.

Issue title contains page pathname 선택

![](../../images/2022-11-23-10-20-00.png)

Issue Label 설정
![](../../images/2022-11-23-10-21-13.png)

Theme 설정
![](../../images/2022-11-23-10-21-58.png)


이제 옵션입력으로 만들어진 아래의 소스코드를 복사한다!

![](../../images/2022-11-23-10-22-37.png)



다른 테마를 쓰시는분은 위의 코드를 댓글창 만드는 html 파일에 바로 넣어주시면되고..

사실 minimal-mistakes  의 경우 이미 포스팅 레이아웃에 utterances html 파일이 만들어져있으므로

_config.yml에서 repository, provider, theme, issue_term 부분만 바꿔주면된다.

(https://utteranc.es/?installation 참조)

![](../../images/2022-11-23-10-27-31.png)