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
>
  <App />
</AnalyticsProvider>
```

## 3. Contributors

This project exists thanks to all the people who contribute. [[Contributing](https://github.com/EveryAnalytics/react-analytics-provider/blob/main/CONTRIBUTING.md)]


## 4. License

Licensed under the MIT License, Copyright (c) 2021 EveryAnalytics.

See [LICENSE](https://github.com/EveryAnalytics/react-analytics-provider/blob/main/LICENSE) for more information.