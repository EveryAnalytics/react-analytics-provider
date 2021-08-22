# Contributing to React-Analytics-Provider

## Develop Environment
- [npm](https://www.npmjs.com/) -v 6.14.13
- [node](https://nodejs.org/ko/download/) -v v14.17.3
- [vscode](https://code.visualstudio.com/)
- [vscode plugin - eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Installation

1. 이 저장소를 [Fork](https://help.github.com/articles/fork-a-repo/) 한 후
   로컬 기기에 [clone](https://help.github.com/articles/cloning-a-repository/) 합니다.
2. 브랜치 생성:
   ```
   git checkout -b MY_BRANCH_NAME
   ```
3. 의존성 설치:
   ```
   npm install
   ```
4. 라이브러리 개발 서버 띄우기:
   ```
   npm run serve
   ```
5. 그 외 여러가지 명령어들을 사용해볼 수 있습니다.
   ```
   # 빌드
   npm run build

   # 테스트
   npm run test
   ```
6. [demo README](https://github.com/EveryAnalytics/react-analytics-provider/tree/main/demo)를 참고해 demo앱도 실행해보세요.

## Commit message

커밋 메세지는 제목과 본문을 포함해야합니다.

제목은 해당 커밋에 대한 주요 내용을 간략하게 기록합니다. 

본문은 커밋에서 수정된 상세내역을 작성합니다. 생략 가능하며, `어떻게`보단 `무엇을`, `왜` 해결했는지 적어주시는 것이 좋습니다.

상황에 따라 연관된 이슈 트래킹 번호를 포함합니다.

## Issue

- 각 이슈는 1개의 주제만 포함해야합니다.
- 문제상황이나 제안을 포함해주세요.
- 최대한 구체적이고 명확하게 작성해주세요. *필요에 따라 스크린샷도 첨부해주세요.

## Pull request(PR)

`main` 브랜치에 PR을 열어주세요.

각 PR은 1개의 주제만 포함해야합니다. 1개의 주제는 여러 부분의 코드를 수정할 수도 있습니다. 예를 들어, `새로운 ga 연동 함수를 추가`는 라이브러리 구현, demo에 예시 추가, 문서 내용 추가 등을 포함합니다.

## Coding Guidelines

`vscode`의 `eslint` 플러그인을 통해 미리 설정된 코드 컨벤션을 적용하고 검사해볼 수 있습니다.

## Add yourself as a contributor

기여자 목록에 자신을 추가하려면 [All Contributors 봇 설명서](https://allcontributors.org/docs/en/bot/usage)를 참고하세요 :)