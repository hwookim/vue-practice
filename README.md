# vue3-without-cli


## Packages

![](https://img.shields.io/badge/-Vue_3-4FC08D?&logo=Vue.Js&logoColor=white)
![](https://img.shields.io/badge/-Typescript-4075bb?&logo=TypeScript&logoColor=white)

![](https://img.shields.io/badge/-Jest-b74d22?&logo=Jest&logoColor=white)
![](https://img.shields.io/badge/-Storybook-FF4785?&logo=Storybook&logoColor=white)

![](https://img.shields.io/badge/-Webpack_5-8DD6F9?&logo=Webpack&logoColor=white)
![](https://img.shields.io/badge/-Babel-F9DC3E?&logo=Babel&logoColor=white)

![](https://img.shields.io/badge/-Prettier-F7B93E?&logo=Prettier&logoColor=white)
![](https://img.shields.io/badge/-ESLint-4B32C3?&logo=ESLint&logoColor=white)

## Run

```
# 패키지 설치
yarn

# 프로젝트 build
yarn build

# dev 서버 실행
yarn dev

# 테스트 실행
yarn test

# 스토리북 실행
yarn storybook
```

## Directory structure

```
├── public
│   └── index.html
├── src
│   ├── components
│   ├── App.vue
│   ├── index.ts
│   └── shims-vue.d.ts // vue 파일 type 선언
├── stories
└── tests
```

---

## Troubleshooting

### jest 실행 시 vue3 파일 로드 문제

[shims-vue.d.ts](https://github.com/hwookim/vue3-without-cli/blob/master/src/shims-vue.d.ts) 추가로 vue 파일 호출 시 DefineComponent를 로드하도록 설정 
`babel preset-env/preset-typescript`, `babel-jest`를 통해 vue 내 typescript 구문을 읽어올 수 있도록 수정

### webpack5 storybook version error

storybook을 쓰기 위해 webpack4 버전으로 다운그래이드 하자 cli, dev-server와 충돌 발생
storybook core 옵션에 `webpack5`를 명시해 오류 해결