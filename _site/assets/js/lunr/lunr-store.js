var store = [{
        "title": "개발자, 깃허브 블로그 포트폴리오 만들기(맥북 M1)",
        "excerpt":"진행 환경 - 2021, 맥북 프로 M1 Pro 14인치 모델 - Ventura 13.1 베타(22C5050e) 버전 목표 minimal mistakes 테마 기반 깃허브 지킬 블로그 만들기 깃허브 계정 만들기. 아래의 링크에서 깃허브 계정을 만든다. 깃허브 Repository(저장소) 만들기 Repository에 들어가서 자신의 블로그로 사용 할 레퍼지토리를 만들어야 한다. 우상단 프로필클릭 -&gt; Your repositories -&gt;...","categories": ["githubblog"],
        "tags": ["github","blog"],
        "url": "/githubblog/jekyll1/",
        "teaser": null
      },{
        "title": "2 깃허브 블로그 포스팅 하는법",
        "excerpt":"기본적인 포스팅 방법 포스팅 할 글의 경우 /posts 에 올려주면 됩니다. 하지만 처음에 없으므로 생성합니다. 새로운 파일생성 _posts/ &lt;- / 를 치면 폴더 생성입니다. 파일 제목은 꼭 년도-월-일-ab-cd.md 형식으로 만들어야합니다. 그후 커밋 뉴 파일을 하면 ? 이와같은식으로 글이 잘 올라오는것을 볼 수 있습니다. 그런데 커밋후 글이올라오는데 시간이 좀 걸리네요! 시간...","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll2/",
        "teaser": null
      },{
        "title": "3 맥북 M1 깃허브 지킬 블로그 환경 만들기",
        "excerpt":"이번에는 터미널 활용과, 로컬서버 생성을 하기 위한 셋업등을 알려드릴게요. 결론적으로 아래와 같은 것들을 설치해야 합니다. Homebrew rbenv ruby (맥은 기본적으로 깔려있지만, 다른버전 설치해야함) jekyll, bundler Homebrew https://brew.sh/index_ko 접속 후 설치. 맥 터미널에서 /bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)” 위와 같은 명령어 실행 시 다운로드 할 수 있다. 이때 혹시 아래와 같은...","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll3/",
        "teaser": null
      },{
        "title": "4 깃허브 블로그 로컬 호스팅 하기 (실시간 확인)",
        "excerpt":"3탄의 과정이 끝났다면 더욱 자유도가 높아집니다. 블로그 내용 수정 시 실시간으로 확인하기 자신의 블로그 레파지토리 폴더를 터미널로 연다. 해당 폴더안에서 아래의 명령어 입력으로 번들을 설치해준다. bundle install 그럼 번들이 우리의 블로그에 설치 되었을 것이다. 그렇다면 아래의 명령어로 서버를 실행시켜준다. bundle exec jekyll serve 아래처럼 나오면 성공! 브라우저로 http://127.0.0.1:4000 에 접속해주면된다....","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll4/",
        "teaser": null
      },{
        "title": "5 VS Code 설치, 확장팩 설치",
        "excerpt":"포스팅을 편리하게 하기 위한 VS code 설치 설치 https://code.visualstudio.com/ 설치 후 VS code 실행 익스텐션 설치 확장팩을 설치하는 과정입니다. 왼쪽 맨아래 확장 메뉴에서 해당 팩들을 설치해주세요. (저는 설치 되어있어서 제거로나옴.) 한글패치 마크다운 언어 사용시 올인원 툴 마크다운 사진 편하게 붙히는 팩 폴더열기 -&gt; 자신의 블로그 레파지토리 선택 이런식으로 나오면 성공입니다....","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll5/",
        "teaser": null
      },{
        "title": "6 맥북 M1, VS code Paste Image",
        "excerpt":"VS code에서 MarkDown 이미지 쉽게 붙혀넣기. Paste Image란? 이미지 복사 -&gt; VS code 마크다운 문서 -&gt; Command + Option + V -&gt; 이미지 파일 자동 저장및, 문서에 삽입 VS Code의 확장에 들어오면 Paste Image라는 앱이 존재 합니다. 설치 설정. Bass Path : url 스타트를 어디서 할지 정합니다. Path :해당 스타트지점...","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll6/",
        "teaser": null
      },{
        "title": "7 _config,yml 수정, 블로그 정보 수정하기",
        "excerpt":"_config.yml에서 여러가지 정보를 수정할 수 있다. skin : 원하는 스킨 선택 민트를 할경 minimal_mistakes_skin : 원하는 스킨 선택, 민트 선택할 경우 locale : “ko-KR” 할 경우 여러가지 설정된 언어가 한글로 바뀝니다 예를들면 위에 팔로우: 피드 이런부분! title : “IT 기술 블로그” title_separator : “ ” subtitle : “small positive action”...","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll7/",
        "teaser": null
      },{
        "title": "Java 테스트 포스팅",
        "excerpt":" ","categories": ["java"],
        "tags": [],
        "url": "/java/Java-test/",
        "teaser": null
      },{
        "title": "깃헙블로그 참조링크, 설정파일 설명 정리",
        "excerpt":"사이드바크기및 넓이, 하이퍼텍스트 밑줄제거   https://eona1301.github.io/github_blog/GithubBlog-Content-Width/   똑같은 테마에 전반적인 내용   https://www.youtube.com/watch?v=–MMmHbSH9k   화이트 / 다크테마 토글 적용하기   https://etch-cure.github.io/blog/toggle-dark-mode/   스크롤바 꾸미기, 설정시 사이드바에도 스크롤바 생겨서 비추   https://ansohxxn.github.io/blog/scrollbar/   카테고리 만들기   https://ansohxxn.github.io/blog/category/   _date/ui-text.yml   영어 -&gt; 한글 번역될때 실제 한글을 지정가능한 설정파일   ##[메롱]    - 문제점  - 배워야할점 - 선행학습  ","categories": ["githubblog"],
        "tags": ["github","blog"],
        "url": "/githubblog/jekyll10/",
        "teaser": null
      },{
        "title": "8 깃허브 블로그 Disqus 댓글 기능 만들기",
        "excerpt":"아래 페이지에서 회원 가입을 해주세요. https://disqus.com/ settings Add Disqus To site 좀 내려서 Get Started I want to install Disqus on my site 아래와 비슷하게 네임을 수정해서 만들어주세요. 베이직 -&gt; Subscribe Now 지킬 클릭. 기본적인설정이 _config.yml에 있으므로 아래 코드 복사 안해도됩니다. Configure클릭 입력후 next Complete setup _config.yml 설정 comments: true...","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll8/",
        "teaser": null
      },{
        "title": "9 Google analytics 추가하기",
        "excerpt":"_config.yml         google analyics검색   첫 사용자인 경우 측정시작 클릭   이름 설정후 맨아래 다음 클릭 ( 설정은 기본 옵션대로 하기 )       업종의 경우 자신이 원하는걸로 선택.         웹 클릭      요런식으로 자신에맞게 URL및 스트림이름 입력후 스트림만들기 클릭    측정 ID복사         적용되는데 시간이 좀걸린다.   analytics -&gt; 보고서에 들어가면 각종 정보들이 확인가능하다.   ","categories": ["githubblog"],
        "tags": [],
        "url": "/githubblog/jekyll9/",
        "teaser": null
      },{
        "title": "깃허브 블로그 Utterances 댓글 기능 만들기",
        "excerpt":"진행 환경 - 2021, 맥북 프로 M1 Pro 14인치 모델 - Ventura 13.1 베타(22C5050e) 버전 목표 minimal mistakes 테마 기반 깃허브 Utterances 댓글 기능 만들기. Utterances는 깃허브의 이슈 utterances로 사용할 댓글이 담길 레파지토리 생성 ( public로 만들기. ) 저는 그냥 Utterances로 만들었습니다. Disqus를 사용하려고 하다가.. 광고는 둘째치고, 저는 아무리 배경을...","categories": ["githubblog"],
        "tags": ["github","blog"],
        "url": "/githubblog/utterances/",
        "teaser": null
      }]
