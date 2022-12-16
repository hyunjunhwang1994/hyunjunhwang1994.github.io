---
layout: single
title: "나누어 떨어지는 숫자 배열 문제"
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

# 나누어 떨어지는 숫자 배열

## 문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수,  

solution을 작성해주세요.

divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.



## 제한 조건
- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

## 입출력 예

|arr|divisor|return|
|---|---|---|
|[5, 9, 7, 10]|5|[5, 10]|   
|[2, 36, 1, 3]|1|[1, 2, 3, 36]|
|[3, 2, 6]|10|[-1]| 

## 입출력 예 설명
입출력 예#1  
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2  
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3  
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.



## 풀이

```java
import java.util.Arrays;
class Solution {
    public int[] solution(int[] arr, int divisor) {
    int count = 0;

        for(int i = 0; i < arr.length; i++){
            if(arr[i] % divisor == 0){
                count++;
            }
        }


        if(count == 0){
            int[] answer = {-1};
            return answer;
        }


        int[] answer = new int[count];
        for(int i = 0,j = 0; i < arr.length; i++){
             if (arr[i] % divisor == 0) {
                 answer[j] = arr[i];
                j++;
            }
        }


        Arrays.sort(answer);
        return answer;
        
    }
}
```


