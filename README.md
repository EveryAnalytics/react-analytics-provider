<p align="center">
  <a href="https://everyanalytics.github.io/web-analytics-handbook/docs/react-analytics-provider/intro" target="blank">
    <img src="https://user-images.githubusercontent.com/3839771/128202563-2f5b9fc6-6b7d-4baf-9861-0cff67993be1.png" height="128">
    <h1 align="center">React Analytics Provider</h1>
  </a>
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@every-analytics/react-analytics-provider">
    <img alt="" src="https://img.shields.io/npm/v/@every-analytics/react-analytics-provider.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/EveryAnalytics/react-analytics-provider/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/@every-analytics/react-analytics-provider.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="GitHub Stars" href="https://github.com/EveryAnalytics/react-analytics-provider">
    <img alt="" src="https://img.shields.io/github/stars/EveryAnalytics/react-analytics-provider?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Web Analytics Handbook" href="https://everyanalytics.github.io/web-analytics-handbook/">
    <img alt="" src="https://img.shields.io/badge/Web%20Analytics%20Handbook-skyblue.svg?style=for-the-badge&label=handbook&labelColor=000000&logoWidth=20">
  </a>
</p>

> Super convenient analytics provider for React

- 💙 Typescript support
- 👨‍👩‍👧‍👦 GA4 support
- 🏃 Currently maintaining


## 1. Getting Started

```shell
npm i --save @every-analytics/react-analytics-provider
# or
yarn add @every-analytics/react-analytics-provider
```

## 2. Usage

You can check examples [here](https://github.com/EveryAnalytics/react-analytics-provider/tree/main/demo)

```tsx
import {AnalyticsProvider} from '@every-analytics/react-analytics-provider';

<AnalyticsProvider
  onInitialize={() => console.log('initialized')}
  onPageView={(params) => console.log('pageview', params)}
  onEvent={(name, params) => console.log('event', name, params)}
  onClick={(name, params) => console.log('click', name, params)}
  onSetUserId={(userId) => console.log('setUserId', userId)}
>
  <App />
</AnalyticsProvider>
```

## 3. Contributors

This project exists thanks to all the people who contribute. [[Contributing](https://github.com/EveryAnalytics/react-analytics-provider/blob/main/CONTRIBUTING.md)]


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://miryang.dev"><img src="https://avatars.githubusercontent.com/u/48237511?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MiryangJung</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=MiryangJung" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://sumini.dev"><img src="https://avatars.githubusercontent.com/u/48555121?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Choi Sumin</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=greatSumini" title="Documentation">📖</a> <a href="#infra-greatSumini" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=greatSumini" title="Code">💻</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3AgreatSumini" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=greatSumini" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://velog.io/@gwsyl22"><img src="https://avatars.githubusercontent.com/u/60775453?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HyojinKim</b></sub></a><br /><a href="#example-hy57in" title="Examples">💡</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=hy57in" title="Code">💻</a> <a href="#design-hy57in" title="Design">🎨</a></td>
    <td align="center"><a href="https://milooy.wordpress.com/"><img src="https://avatars.githubusercontent.com/u/3839771?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yurim Jalynne Jin</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=milooy" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jhlee910609"><img src="https://avatars.githubusercontent.com/u/28521282?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JunHee Lee</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=jhlee910609" title="Code">💻</a> <a href="#infra-jhlee910609" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3Ajhlee910609" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://p-iknow.netlify.app/"><img src="https://avatars.githubusercontent.com/u/35516239?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Youngchang Lee</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=p-iknow" title="Code">💻</a> <a href="#infra-p-iknow" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3Ap-iknow" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://hiphapis.net"><img src="https://avatars.githubusercontent.com/u/18629?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Johan Kim</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3Ahiphapis" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.youtube.com/channel/UCdnWPvHy7CbsWAgT7F8aS-A"><img src="https://avatars.githubusercontent.com/u/59904672?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leehaeun</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=Leehaeun0" title="Code">💻</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3ALeehaeun0" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://forhjy.medium.com/"><img src="https://avatars.githubusercontent.com/u/60052127?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jiyoon Hur</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=jiyoon1156" title="Code">💻</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3Ajiyoon1156" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/josworks27"><img src="https://avatars.githubusercontent.com/u/48130830?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seongcheol Jo</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=josworks27" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/uoon-dev"><img src="https://avatars.githubusercontent.com/u/38661266?v=4?s=100" width="100px;" alt=""/><br /><sub><b>uoon (philos)</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=uoon-dev" title="Code">💻</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3Auoon-dev" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/chanheeis"><img src="https://avatars.githubusercontent.com/u/53820773?v=4?s=100" width="100px;" alt=""/><br /><sub><b>chanheeis</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=chanheeis" title="Code">💻</a> <a href="https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+reviewed-by%3Achanheeis" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/yeppin"><img src="https://avatars.githubusercontent.com/u/81066071?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yebin Seo</b></sub></a><br /><a href="https://github.com/EveryAnalytics/react-analytics-provider/commits?author=yeppin" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


## 4. License

Licensed under the MIT License, Copyright (c) 2021 EveryAnalytics.

See [LICENSE](https://github.com/EveryAnalytics/react-analytics-provider/blob/main/LICENSE) for more information.