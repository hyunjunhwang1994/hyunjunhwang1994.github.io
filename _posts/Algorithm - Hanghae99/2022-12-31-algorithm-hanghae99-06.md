---
layout: single
title: "행렬의 곱셈"
categories: 
    - Algorithm - Hanghae99
tag: []
---

<div class="notice" style="text-align:center">
          개발 환경<br>
          - 2021, 맥북 프로 M1 Pro 14인치 모델 <br>
          - Ventura 13.2
</div>
<hr>

<div class="notice--info" style="text-align:center">
        해당 풀이는 자바로 이루어져 있고,<br>
        프로그래머스의 문제를 토대로 포스팅했습니다.
</div>
<hr>



## 문제 설명
2차원 행렬 arr1과 arr2를 입력받아,  
arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해 주세요.



## 제한 조건
- 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
- 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
- 곱할 수 있는 배열만 주어집니다.

## 입출력 예

|arr1|arr2|return|
|---|---| |
|[[1, 4], [3, 2], [4, 1]]|[[3, 3], [3, 3]]|[[15, 15], [15, 15], [15, 15]]|
|[[2, 3, 2], [4, 2, 4], [3, 1, 4]]|[[5, 4, 3], [2, 4, 1], [3, 1, 1]]|[[22, 22, 11], [36, 28, 18], [29, 20, 14]]|

## 코드 작성 전 생각 먼저 하기.

ex) 3x2 * 2x2 
- 앞 행렬의 행과, 뒷 행렬의 열을 빼와서 3x2 * 2x2 = 3x2 행렬이 나온다
- 현재의 입력은 곱해지는 행렬만 주어지지만, 앞단의 열과, 뒷단의 행이 다르다면 행렬의 곱셈이 이루어지지 않는다.
- (3x3 * 2x3 불가)
- 바로바로 떠오르지 않는다면 행과 열을 곱할 때 나오는 패턴을 일일이 찾은 후 for 문으로 구현해 주면 된다.
- 바깥 for: 결과물이 될 행렬의 행을 돈다.
- 중간 for: 결과물이 될 행렬의 열을 돈다.
- 안쪽 for: 실제 주어진 행렬의 곱셈이 이루어져 결과물을 도출한다.

    

        (n*3) * (3*n) 행렬의 경우 아래와 같은 패턴이 나옴.

                 [0][0] * [0][0]
                 [0][1] * [1][0]
                 [0][2] * [2][0]

                 [0][0] * [0][1]
                 [0][1] * [1][1]
                 [0][2] * [2][1]

                 [0][0] * [0][2]
                 [0][1] * [1][2]
                 [0][2] * [2][2]

                 [1][0] * [0][0]
                 [1][1] * [1][0]
                 [1][2] * [2][0]

                 [1][0] * [0][1]
                 [1][1] * [1][1]
                 [1][2] * [2][1]

                 [1][0] * [0][2]
                 [1][1] * [1][2]
                 [1][2] * [2][2]

                        .  
                        .
                        .

## 코드 풀이

```java
public class Main {

    public int[][] solution(int[][] arr1, int[][] arr2) {


        int arr1row = arr1.length;
        int arr2col = arr2[0].length;
        int sum = 0;

        int[][] answer = new int[arr1row][arr2col];


        for (int i = 0; i<arr1row; i++){

            for (int j = 0; j < arr2col; j++) {

                System.out.println(i + "row, " +  j + "column");
                for (int k = 0; k < arr2.length; k++) {

                     sum += arr1[i][k] * arr2[k][j];
                }
                answer[i][j] = sum;
                sum = 0;
            }

        }


        return answer;
    }


    public static void main(String[] args) {

        int[][] arr1 = { {1, 4}, {3, 2}, {4, 1} };
        int[][] arr2 = { {3, 3}, {3, 3} };


        Main main = new Main();

        System.out.println(main.solution(arr1, arr2));


    }
}
```





