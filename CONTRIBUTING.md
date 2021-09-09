# Contributing to React-Analytics-Provider

## Develop Environment
- [yarn berry](https://yarnpkg.com/) -v 3.0.1
- [node](https://nodejs.org/ko/download/) -v v14.17.3
- [vscode](https://code.visualstudio.com/)
- [vscode plugin - eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Installation

1. 이 저장소를 [Fork](https://help.github.com/articles/fork-a-repo/) 한 후
   로컬 기기에 [clone](https://help.github.com/articles/cloning-a-repository/) 합니다.
2. VSCode를 사용한다면 아래 과정을 통해 custom TS setting을 활성화해야합니다.
   1. TypeScript 파일이 열러있는 상태로 `ctrl(cmd) + shift + p`를 입력합니다.
   2. "Select TypeScript Version"을 선택합니다.
   3. "Use Workspace Version"을 선택합니다.

2. 브랜치 생성:
   ```shell
   git checkout -b MY_BRANCH_NAME
   ```
3. 의존성 설치:
   ```shell
   # can skip if you already installed
   npm i -g yarn
   yarn install
   ```
4. 라이브러리 개발 서버 띄우기:
   ```shell
   yarn serve
   ```
5. 그 외 여러가지 명령어들을 사용해볼 수 있습니다.
   ```shell
   # 빌드
   yarn build

   # 테스트
   yarn test
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

## NPM Publish
[Semantic versioning](https://semver.org/)을 기준으로 npm 패키지 버전을 관리합니다. 

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards compatible manner, and
- PATCH version when you make backwards compatible bug fixes.

이에 맞게 아래 명령어 중 하나를 입력합니다.

```sh
npm version major
npm version minor
npm version patch
```
자동으로 commit과 tag가 생성되고 package.json의 버전이 올라갑니다.

npm 저장소 publish를 원한다면 @milooy 에게 권한을 요청합니다.
https://www.npmjs.com/package/@every-analytics/react-analytics-provider
```sh
npm login
npm publish
```


## Add yourself as a contributor

기여자 목록에 자신을 추가하려면 [All Contributors 봇 설명서](https://allcontributors.org/docs/en/bot/usage)를 참고하세요 :)