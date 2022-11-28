---
title: "객체, 클래스, 인스턴스" 
last_modified_at: 2022-11-27
categories: 
    - Basic of java
tag: ["객체", "클래스", "인스턴스"]
---

<!-- 나의 실제 컴퓨터및 컴퓨터 버전 -->
<div class="notice" style="text-align:center">
          개발 환경<br>
          - 2021, 맥북 프로 M1 Pro 14인치 모델 <br>
          - Ventura 13.1 베타(22C5050e) 버전
</div>
<hr>

<!-- 자바 포스팅시 JDK, IDE버전 등-->
<div class="notice--info" style="text-align:center">
          버전<br>
          JDK: OpenJDK Runtime Environment (Zulu 8.66.0.15-CA-macos-aarch64) (build 1.8.0_352-b08)<br>
          IntelliJ: IntelliJ IDEA 2022.2.3 (Community Edition)
</div>
<hr>


1. 클래스, 객체
2. 상속과 오버라이딩 오버로딩
3. 추상클래스와 인터페이스
4. 패키지와 제어자


># 객체지향 프로그래밍?

- ex) 자동차(프로그램)은 바퀴(객체), 엔진(객체), 핸들(객체)등을 조합하여 만든다.
- 그러한 바퀴, 엔진, 핸들등은 설계도인 클래스를 통하여 만든다.
- 객체들을 조합하여 전체 프로그램을 만드는것!
- 객체는 클래스를 이용하여 만들어진 프로그램의 구성 요소이다.


<br>

># 클래스

## 클래스 란?
사물의 특성을 소프트웨어적으로 추상화하여 모델링 한 것으로  
객체를 만들 수 있는 틀(Template)로써 오브젝트의 정적인 상태를 나타냅니다. 

## 클래스의 구조
- Fields : 정보와 상태를 나타냄
- Methods() : 기능과 동작을 나타냄.

즉, 필드(field)란 클래스에 포함된 변수(variable)를 의미합니다.  
또한, 메소드(method)란 어떠한 특정 작업을 수행하기 위한 명령문의 집합이라 할 수 있습니다.

<br>

ex) 자동차 클래스

정보/상태 (Fields)  
이름, 최고속도, 가격, 브랜드

기능 / 동작 / 행동 (Methods())  
시동켜기, 악셀, 브레이크    


## 객체(인스턴스)

객체란 클래스를 실제 사용할 수 있도록 만든 것으로  
메모리 공간을 할당해 놓은 인스턴스(Instance)라고도 하며 

클래스의 동적인 상태를 의미합니다. (new 명령어를 통해 생성) 
자바에서 클래스를 사용하기 위해서는 우선 해당 클래스 타입의 객체(object)를 선언해야 합니다.

```java
car avante = new car();
```

이렇게 클래스로부터 객체를 선언하는 과정을 클래스의 인스턴스 화라고 합니다.  
또한, 이렇게 선언된 해당 클래스 타입의 객체를 인스턴스(instance)라고 합니다.

즉, 인스턴스란 메모리에 할당된 객체를 의미합니다.  
자바에서는 하나의 클래스로부터 여러 개의 인스턴스를 생성할 수 있습니다.

이렇게 생성된 인스턴스는 독립된 메모리 공간에 저장된 자신만의 필드를 가질 수 있습니다.  
하지만 해당 클래스의 모든 메소드(method)는  
해당 클래스에서 생성된 모든 인스턴스가 공유하게 됩니다.


<hr>


## 코드로 확인해 보자.

```java
public class Main {


    // 자바의 경우 암묵적으로 클래스이름은 무조건 대문자로 시작.
    public class Car{

        // 멤버 변수 (속성), camel case로 네이밍하기.
        int maxSpeed;
        int price;

        // 기본 생성자 ( 메모리에 객체를 생성하는 역할 )
        public Car(){
            System.out.println("car constructor");
        }

        // 생성자와 메소드의차이 맨앞에 대문자인지 소문자인지

        // 메소드 (기능), camel case로 네이밍하기.
        void showInfo(){
            System.out.println("최고 속도는" + maxSpeed);
            System.out.println("가격은" + price);
        }
    }

    public static void main(String[] args) {
        //car타입인 avante에넣는다. <--car()객체를 생성
        car avante = new car();
        // new car() : 메모리 내에 객체생성, 이때 객체를 생성하기 위한 메소드로 사용하기 위해 만들어진 것이 기본 생성자
        // car avante : car타입의 avante인스턴스 생성
        

    }
}
```

① 멤버 변수: 클래스의 속성  
② 생성자: 객체의 초기화를 담당  
③ 메소드: 클래스의 속성을 조작  
④ 내포 클래스(Nested Class): 클래스안에 클래스 존재 가능




```java

 public class Car{

        int maxSpeed;// 전역변수
        int price;

        // 이런식으로 만들면 이 바로아래 변수는 지역 변수이므로
        public Car(int maxSpeed, int price){
            // 전역변수랑 이름이 겹친다.
            maxSpeed = maxSpeed;
            price = price;
        }


    }
```

```java

 public class Car{

        int maxSpeed;   
        int price;

        
        public Car(int maxSpeed, int price){
        // 그레서 이렇게 this를 붙혀 이 객체의 전역변수라는 것을 알려주어 생성자를 사용한다.
            this.maxSpeed = maxSpeed;
            this.price = price;
        }
        // 기본 생성자가 있어야 위와 같은 생성자를 만들 수 있다.


    }
```



[참조 블로그](https://danmilife.tistory.com/19)