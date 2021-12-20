import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Game from "./routes/tictactoe";
import Invoice from "routes/invoice";
import CounterContainer from "containers/CounterContainer";

// redux 관련 불러오기
import { createStore } from "redux";
import reducers from './reducers';
import { Provider } from "react-redux";

// redux store 생성
const store = createStore(reducers);


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
                    <Route path="counter" element={<CounterContainer />} />
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