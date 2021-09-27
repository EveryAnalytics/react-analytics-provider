# react-anlytics-provider 데모

## 공지 (2021.09.27)
> Q. VSCode에서 demo/with-cra 코드에 빨간줄이 보여요
=> demo/with-cra의 의존성을 해당 폴더의 node_modules가 아닌 상위의 의존성(.yarn)을 읽는 버그가 있습니다. 해결 전까지는 VSCode에서 demo/with-cra를 직접 열어주세요.
[관련 이슈](https://github.com/Microsoft/vscode/issues/32693) [관련 PR](https://github.com/EveryAnalytics/react-analytics-provider/pull/214)

## 환경설정

1. 의존성 설치

```sh
npm install
```

2. `.env`파일 추가

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_GA_TRACKING_ID=트래킹아이디를적으세요
```

## 데모 실행

root 폴더에서 `npm run build` 혹은 `npm run serve` 명령어로 라이브러리를 빌드한 후
본 폴더(/demo/with-cra)에서 `npm start`명령어로 개발 서버를 띄웁니다.
