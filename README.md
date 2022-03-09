
# 참고 및 출처

* https://velog.io/@velopert
* https://typescript-kr.github.io/pages/jsx.html
* https://joshua1988.github.io/ts/intro.html
* https://ko.reactjs.org/
* 기존 프로젝트에 typescript 설정 추가
    + https://create-react-app.dev/docs/adding-typescript/


# 개발자 도구 설치

> Redux DevTools

* chrome 확장프로그램
* 액션이 dispatch 될때마다 로그를 보고 또 그 전 상태로 돌아갈 수 있게 함.

> TypeScript 설치

* npm install -g typescript
* tsconfig.json 생성 명령어
    + tsc --init
* .ts 파일 컴파일 명령어 (tsconfig.json outDir 속성으로 설정한 경로에 .js 파일 생성됨.)
    + tsc
* .js 실행 명령어
    + node dist/practice.js

<br>

# 필요 라이브러리 설치

> react-router-dom

* 라우터를 지원하는 라이브러리

```
$ npm install react-router-dom --save
```

> cross-env

* NODE_PATH를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정할 수 있게 해주는 라이브러리.
* package.json의 scripts 객체에 NODE_PATH 를 이용한 절대경로 설정은 deprecated 되었으니 사용을 지양함.

```
$ npm install --save-dev cross-env
```

> immutable

* 리액트의 불변성을 보장해주는 라이브러리, 메타(구 페이스북)에서 제작함.
* Map, List, Record 등을 사용하여 불변성을 보장해주고, 객체생성을 더 직관적으로 할 수 있을 듯함.
* 참고 : https://velopert.com/3486

```
$ npm install immutable
```

> redux

* redux를 지원하는 라이브러리
* 상태 관리를 컴포넌트 바깥에서 할 수 있도록 지원함.
* redux 처리를 위한 디렉토리 구조
    + actions: 액션타입, 액션생성자 파일이 저장됩니
    + components: 뷰만을 담당하는 presentational 컴포넌트들이 저장됩니다
        - 프리젠테이셔널 컴포넌트는 오직 뷰만을 담당하는 컴포넌트입니다. 이 안에는 DOM 엘리먼트, 그리고 스타일을 갖고 있으며, 프리젠테이셔널 컴포넌트나 컨테이너 컴포넌트를 가지고 있을 수도 있습니다. 하지만, 리덕스의 스토어에는 직접적인 접근 권한이 없으며 오직 props 로만 데이터를 가져올수 있습니다. 또한, 대부분의 경우 state 를 갖고있지 않으며, 갖고있을 경우엔 데이터에 관련된것이 아니라 UI 에 관련된것이어야 합니다. 주로 함수형 컴포넌트로 작성되며, state 를 갖고있어야하거나, 최적화를 위해 LifeCycle 이 필요해질때 클래스형 컴포넌트로 작성됩니다.
    + containers: store 에 접근이 닿는 container 컴포넌트들이 저장됩니다
        - container 컴포넌트는 프리젠테이셔널 컴포넌트들과 컨테이너 컴포넌트들을 관리하는것을 담당합니다. 주로 내부에 DOM 엘리먼트가 직접적으로 사용되는 경우는 없습니다. 사용되는 경우는 감싸는 용도일때만 사용 됩니다. 또한, 스타일을 가지고있지 않아야합니다. 스타일들은 모두 프리젠테이셔널 컴포넌트에서 정의되어야 합니다. 상태를 가지고 있을 때가 많으며, 리덕스에 직접적으로 접근 할 수 있습니다.
    + reducers: 스토어의 기본상태와, 상태의 업데이트를 담당하는 리듀서 파일들이 저장됩니다
    + utils: 일부 컴포넌트들에서 공용되는 파일이 저장됩니다.
* 참고 : https://velopert.com/3346, https://velopert.com/3533

```
$ npm install redux react-redux
```

> redux-actions

* redux 의 action 관리를 도와주는 라이브러리

```
$ npm install redux-actions
```

* 사용예

```
-- 액션생성자
export const increment = createAction(CREATE, color => color); // 매개변수 color
export const setColor = createAction(SET_COLOR); // 매개변수 { index, color }

-- dispatch 를 통해 액션에 매개변수 전달
actions.increment(index)

-- 매개변수 전달 시 액션 값 예시
{
    type: 'INCREMENT',
    payload: 5
}

-- handleActions 에서의 값 접근 예시
[INCREMENT]: (state, action) => {

    const counters = state.get('counters');

    return state.set('counters', counters.update(
        action.payload,
        (counter) => counter.set('number', counter.get('number') + 1)
    ));

}


-- dispatch 를 통해 액션에 매개변수 전달
actions.setColor({index, color})

-- 매개변수 전달 시 액션 값 예시
{
    type: 'SET_COLOR',
    payload: {
        index: 5,
        color: '#fff'
    }
}

-- handleActions 에서의 값 접근 예시
[SET_COLOR]: (state, action) => {

    const counters = state.get('counters');

    return state.set('counters', counters.update(
        action.payload.index,
        (counter) => counter.set('color', action.payload.color)
    ));

}

```


> redux-devtools-extension

* 크롬에서 Redux DevTools 을 사용하기 위해서는 store 생성 시 속성값 셋팅이 필요함. 하지만 redux middleware와 devtools 속성을 같이 셋팅하기가 힘듦.
* middleware에서도 devtools 를 사용할 수 있도록 도와주는 라이브러리

```
$ npm i redux-devtools-extension
```


# 설정 파일

> jsconfig.js

* import 문 경로를 절대경로로 이용할 수 있도록 하는 설정 추가

```
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": [
        "src"
    ]
}
```



> package.json / package-lock.json

* npm을 통한 모듈 설치 시 사용되는 파일
* package-lock.json 의 경우 버전대가 지정되어있으므로 npm 설치 시 꼭 필요한 파일임.

> tsconfig.json

* 타입스크립트 설정 파일

<br>
<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
