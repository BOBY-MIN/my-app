// redux 관련 불러오기
import { createStore, applyMiddleware } from "redux";
// Redux DevTools 와 middleware 동시 셋팅 라이브러리
import { composeWithDevTools } from "redux-devtools-extension";
// redux-actions, Ducks 구조를 사용한 방식으로 변경
// import reducers from 'reducers';
import reducers from 'modules';
// 미들웨어 적용하기
import loggerMiddleware from "lib/loggerMiddleware";
import loggerPlusMiddleware from "lib/loggerPlusMiddleware";

const configure = () => {

    // redux store 생성
    // const store = createStore(reducers);
    // 개발자도구에서 Redux DevTools 사용할 수 있도록 store 생성
    // store 는 여러개 생성할 수 있으나 원칙적으로 하나만 사용해야 함.
    // 여러개 생성 시 디버깅 불가
    // const store = createStore(modules);

    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(
                    reducers, 
                    composeWithDevTools(
                        applyMiddleware(
                            loggerMiddleware,
                            loggerPlusMiddleware
                        )
                    )
                );

    return store;
}

export default configure;