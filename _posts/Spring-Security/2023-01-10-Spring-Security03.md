---
layout: single
title: "Spring Security Multi Filter Chain, Custom"
last_modified_at: 2023-01-10
categories: 
    - Spring Security
tag: [Spring Security Multi Filter Chain]
---

<div class="notice" style="text-align:center">
          개발 환경<br>
          - 2021, 맥북 프로 M1 Pro 14인치 모델 <br>
          - Ventura 13.2
</div>
<hr>

<div class="notice--info" style="text-align:center">
          Spring-Boot 2.7.7<br>
          Spring Security 5.7.6
</div>

<hr>


아래의 공식문서를 참고하여 정리했습니다.  
[스프링 시큐리티 공식 문서 참고](https://docs.spring.io/spring-security/reference/5.7/servlet/configuration/java.html)


이 글의 목표
- /api, /test, /admin 등 N개의 URL을 따로따로 처리가능하게 필터 체인을 구성할 수 있도록 기술할 예정입니다.
