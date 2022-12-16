---
layout: single
title: "이상한 문자 만들기"
categories: 
    - Algorithm - Hanghae99
tag: []
---

<div class="notice" style="text-align:center">
          개발 환경<br>
          - 2021, 맥북 프로 M1 Pro 14인치 모델 <br>
          - Ventura 13.1
</div>
<hr>

<div class="notice--info" style="text-align:center">
        해당 풀이는 자바로 이루어져 있고,<br>
        프로그래머스의 문제를 토대로 포스팅했습니다.
</div>
<hr>

# 이상한 문자 만들기



## 문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다.  
각 단어는 하나 이상의 공백문자로 구분되어 있습니다.  
각 단어의 짝수번째 알파벳은 대문자로,  
홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.



## 제한 조건
- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

## 입출력 예

|s|return|
|---|---|
|"try hello world"|"TrY HeLlO WoRlD|


## 입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.  

각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
"TrY", "HeLlO", "WoRlD"입니다.  
따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

## 풀이

```java
class Solution {
    public String solution(String s) {
String answer="";
        int cnt=0;


        for(int i=0; i<s.length();i++){
            char c = s.charAt(i);

            if(c == ' '){
                answer += " ";
                cnt = 0;
                continue;
            }

            if((cnt%2)==0){
                answer += String.valueOf(Character.toUpperCase(c));
                cnt++;
            }else{
                answer += String.valueOf(Character.toLowerCase(c));
                cnt++;
            }
        }
        return answer;
    }
}
```




## 사용된 중요 함수
- charAt();
- String.valueOf();
- Character.toUpperCase();

