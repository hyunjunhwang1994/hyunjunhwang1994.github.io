---
layout: single
title: "깃허브 블로그 로컬 호스팅 하기 (실시간 확인)"
last_modified_at: 2022-11-28
categories: 
    - 블로그 만들기
tag: [Jekyll blog 로컬 환경 만들기, Jekyll blog 실시간 확인]
---



<div class="notice" style="text-align:center">
          개발 환경<br>
          - 2021, 맥북 프로 M1 Pro 14인치 모델 <br>
          - Ventura 13.1 베타(22C5050e) 버전
          </div>
<hr>

># 블로그 로컬 호스팅 하기

자신의 블로그 레파지토리 폴더를 터미널로 연다.
![](../../images/2022-11-20-18-49-07.png){: .align-center}

해당 폴더 안에서 아래의 명령어 입력으로 번들을 설치해 준다.


        bundle install

<br>

그럼 번들이 우리의 블로그에 설치되었을 것이다.        

그렇다면 아래의 명령어로 서버를 실행시켜준다.

        bundle exec jekyll serve

아래처럼 나오면 성공!
![](../../images/2022-11-20-18-51-56.png){: .align-center}

브라우저로 http://127.0.0.1:4000에 접속해 주면 된다.

이때 원래는 호스팅 중인 서버에 파일 변경 시 바로 변경이 되어야 하지만,  
서버를 재시작 해야만 변경이 되어서 삽질을 좀 했다.

그럴 땐  --force-polling를 추가해 주면 된다.

        bundle exec jekyll serve --force-polling    

그럼 이제 포스팅 수정 시 서버 재시작을 하지 않아도  
브라우저 새로고침만 하면 수정된 내용이 바로바로 보일 것이다.  
( 실제 깃허브 블로그에 적용하려면, Commit, Push 필수 )


       






