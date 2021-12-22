import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import Expenses from "routes/expenses";
import Invoices from "routes/invoices";
import Game from "routes/tictactoe";
import Invoice from "routes/invoice";
// 카운터컨테이너 제거
// import CounterContainer from "containers/CounterContainer";
import Count from "routes/count";

// redux 관련 불러오기
import { createStore } from "redux";
import reducers from './reducers';
import { Provider } from "react-redux";

// redux store 생성
// const store = createStore(reducers);
// 개발자도구에서 Redux DevTools 사용할 수 있도록 store 생성
// store 는 여러개 생성할 수 있으나 원칙적으로 하나만 사용해야 함.
// 여러개 생성 시 디버깅 불가
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />} >
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an invoice</p>
                            </main>
                            }
                        />
                        <Route path=":invoiceId" element={<Invoice />} />
                    </Route>
                    <Route path="game" element={<Game />} />
                    <Route path="counter" element={<Count />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>, 
    rootElement
);