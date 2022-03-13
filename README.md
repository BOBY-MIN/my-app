
* 출처 및 참고
    + https://velog.io/@velopert/typescript-basics

<br>

> typescript 명령어

```
-- package.json 자동 생성
$ npm init -y

-- tsconfig.json 자동 생성
$ tsc --init

-- typescript 컴파일
-- tsconfig.json 파일의 outDir에 지정된 경로에 js 생성됨.
$ tsc

-- js 실행
$ node dist/practice.js


```


> tsconfig.json 참고

```
- target: 컴파일된 코드가 어떤 환경에서 실행될 지 정의합니다. 예를들어서 화살표 함수를 사용하고 target 을 es5 로 한다면 일반 function 키워드를 사용하는 함수로 변환을 해줍니다. 하지만 이를 es6 로 설정한다면 화살표 함수를 그대로 유지해줍니다.

- module: 컴파일된 코드가 어던 모듈 시스템을 사용할지 정의합니다. 예를 들어서 이 값을 common 으로 하면 export default Sample 을 하게 됐을 때 컴파일 된 코드에서는 exports.default = helloWorld 로 변환해주지만 이 값을 es2015 로 하면 export default Sample 을 그대로 유지하게 됩니다.
- strict: 모든 타입 체킹 옵션을 활성화한다는 것을 의미합니다.

- esModuleInterop: commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해줍니다.

- outDir : 컴파일된 파일들이 저장되는 경로
```
