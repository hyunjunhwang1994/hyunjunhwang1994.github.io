---
layout: single
title: "2016년 문제"
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

# 2016년

## 문제 설명
2016년 1월 1일은 금요일입니다.   
2016년 a월 b일은 무슨 요일일까요? 

두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수,  
solution을 완성하세요. 

요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.   
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

## 제한 조건
- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

## 입출력 예

|a|b|result|
|---|---|---|
|5|24|"TUE"|






## 풀이
- 1월 1일 -> 금요일이므로, FRI부터 저장한다.
- 윤년만 기준이므로, 윤년의 마지막 날을 저장한다.
- 모든 일자를 더해 7로 나눈 나머지를 요일에 대입한다.
- 해당하는 a(월)의 b(일)을 세기 전까지는 month의 배열로 해당 월의 일 값을 넣는다.
- b - 1 로 인해 1월 1일부터 a월 b일까지 모든 날짜를 더한 값이 나온다. (1월 1일부터니 b - 1)

```java
class Solution {
    public String solution(int a, int b) {
        
        
        String[] day = {"FRI", "SAT", "SUN", "MON", "TUE",
                "WED", "THU"};

        
        int [] month = {31,29,31,30,31,30,31,31,30,31,30,31};
        int date = 0;  

        for(int i = 0; i < a - 1; i++){
            date += month[i];
        }
        date += b - 1;

        String answer = day[date % 7];
        
        
        return answer;
    }
}
```



