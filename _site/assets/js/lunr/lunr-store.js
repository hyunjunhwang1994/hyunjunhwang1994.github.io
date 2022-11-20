var store = [{
        "title": "1 맥북 M1 개발자, 깃허브 블로그 포트폴리오 만들기",
        "excerpt":"시작 전, 깃허브 계정을 만들어주세요. repositories에 들어가서 자신의 블로그로 사용할 레파지토리를 만듭니다. Repositroy name은 꼭 깃허브계정.github.io로 만들어주세요 ( 본인의 블로그 주소입니다. ) 다른 지킬 테마를 fork로 가저오면서 레파지토리를 만들면 편하지만, 그럴 경우 커밋과 같은 과정에서 잔디가 심어지지 않아요ㅜㅜ 그렇기 때문에 이와 같이 직접 테마를 넣어줘야 합니다. 일단 깃허브 데스크탑 깔아주세요...","categories": [],
        "tags": [],
        "url": "/jekyll1/",
        "teaser": null
      },{
        "title": "2 깃허브 블로그 포스팅 하는법",
        "excerpt":"기본적인 포스팅 방법 포스팅 할 글의 경우 /posts 에 올려주면 됩니다. 하지만 처음에 없으므로 생성합니다. 새로운 파일생성 _posts/ &lt;- / 를 치면 폴더 생성입니다. 파일 제목은 꼭 년도-월-일-ab-cd.md 형식으로 만들어야합니다. 그후 커밋 뉴 파일을 하면 ? 이와같은식으로 글이 잘 올라오는것을 볼 수 있습니다. 그런데 커밋후 글이올라오는데 시간이 좀 걸리네요! 시간...","categories": [],
        "tags": [],
        "url": "/jekyll2/",
        "teaser": null
      },{
        "title": "3 맥북 M1 깃허브 지킬 블로그 환경 만들기",
        "excerpt":"이번에는 터미널 활용과, 로컬서버 생성을 하기 위한 셋업등을 알려드릴게요. 결론적으로 아래와 같은 것들을 설치해야 합니다. Homebrew rbenv ruby (맥은 기본적으로 깔려있지만, 다른버전 설치해야함) jekyll, bundler Homebrew https://brew.sh/index_ko 접속 후 설치. 맥 터미널에서 /bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)” 위와 같은 명령어 실행 시 다운로드 할 수 있다. 이때 혹시 아래와 같은...","categories": [],
        "tags": [],
        "url": "/jekyll3/",
        "teaser": null
      },{
        "title": "4 깃허브 블로그 로컬 호스팅 하기 (실시간 확인)",
        "excerpt":"3탄의 과정이 끝났다면 더욱 자유도가 높아집니다. 블로그 내용 수정 시 실시간으로 확인하기 자신의 블로그 레파지토리 폴더를 터미널로 연다. 해당 폴더안에서 아래의 명령어 입력으로 번들을 설치해준다. bundle install 그럼 번들이 우리의 블로그에 설치 되었을 것이다. 그렇다면 아래의 명령어로 서버를 실행시켜준다. bundle exec jekyll serve 아래처럼 나오면 성공! 브라우저로 http://127.0.0.1:4000 에 접속해주면된다....","categories": [],
        "tags": [],
        "url": "/jekyll4/",
        "teaser": null
      },{
        "title": "5 VS Code 설치, 확장팩 설치",
        "excerpt":"포스팅을 편리하게 하기 위한 VS code 설치 설치 https://code.visualstudio.com/ 설치 후 VS code 실행 익스텐션 설치 확장팩을 설치하는 과정입니다. 왼쪽 맨아래 확장 메뉴에서 해당 팩들을 설치해주세요. (저는 설치 되어있어서 제거로나옴.) 한글패치 마크다운 언어 사용시 올인원 툴 마크다운 사진 편하게 붙히는 팩 폴더열기 -&gt; 자신의 블로그 레파지토리 선택 이런식으로 나오면 성공입니다....","categories": [],
        "tags": [],
        "url": "/jekyll5/",
        "teaser": null
      },{
        "title": "6 맥북 M1, VS code Paste Image",
        "excerpt":"VS code에서 MarkDown 이미지 쉽게 붙혀넣기. Paste Image란? 이미지 복사 -&gt; VS code 마크다운 문서 -&gt; Command + Option + V -&gt; 이미지 파일 자동 저장및, 문서에 삽입 VS Code의 확장에 들어오면 Paste Image라는 앱이 존재 합니다. 설치 설정. 1. Paste Image: Path 실제 이미지 파일이 저장될 경로에 대한 옵션입니다....","categories": [],
        "tags": [],
        "url": "/jekyll6/",
        "teaser": null
      },{
        "title": "7 _config,yml 수정, 블로그 정보 수정하기",
        "excerpt":"_config.yml에서 여러가지 정보를 수정할 수 있다. skin : 원하는 스킨 선택 민트를 할경 minimal_mistakes_skin : 원하는 스킨 선택, 민트 선택할 경우 locale : “ko-KR” 할 경우 여러가지 설정된 언어가 한글로 바뀝니다 예를들면 위에 팔로우: 피드 이런부분! title : “IT 기술 블로그” title_separator : “ ” subtitle : “small positive action”...","categories": [],
        "tags": [],
        "url": "/jekyll7/",
        "teaser": null
      }]
