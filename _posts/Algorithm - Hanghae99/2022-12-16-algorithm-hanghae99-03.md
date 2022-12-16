---
layout: single
title: "수박수박수박수박수박수?"
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

# 수박수박수박수박수박수?

## 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,  
solution을 완성하세요. 

예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.



## 제한 조건
- n은 길이 10,000이하인 자연수입니다.

## 입출력 예

|n|return|
|---|---|
|3|"수박수"|
|4|"수박수박"|





## 풀이

```java
class Solution {
    public String solution(int n) {
        String answer = "";
        int cnt = 0;
        String words1 ="수";
        String words2 ="박";

        for(int i = 1; i <= n; i++){
            if(cnt == 0){
                answer += words1;
                cnt = 1;
            }else{
                answer += words2;
                cnt = 0;
            }
        }

        return answer;
    }
}
```




