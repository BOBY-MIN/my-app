import { stringify } from 'querystring';
import React, { useState } from 'react';

function Counter() {
    // const [count, setCount] = useState<number>(0);
    // 주어진 초기값으로 타입추론을 하기 때문에 generic을 지정하지 않아도 됨.
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);


    // Hook 사용 시 generic을 명시하면 좋은 경우
    // 1. hook의 상태가 null 일 수도 있고 아닐 수도 있는 경우
    interface Information { name: string; description: string };
    const [info, setInformation] = useState<Information | null>({name : "sangmin", description: "sangmin is human"});

    // 2. 상태의 유형이 까다로운 구조를 가진 객체이거나 배열인 경우
    interface Todo { id: Number; text: string; done: boolean };
    const [todos, setTodos] = useState<Todo[]>(
        [
            {id: 1, text: "is One", done: true }
            ,{id: 2, text: "is Two", done: true }
            ,{id: 3, text: "is Four", done: false }
        ]
        );

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
            <div>
                {/* 객체 뒤에 ? 기호는 상태의 유형이 여러개 지정된 경우 표기됨. */}
                <p>{info?.name}</p>
                <p>{info?.description}</p>
                <ul>
                {
                    todos.map((todo) =>
                        <li key={todo.id.toString()}>{todo.id} {todo.text} {todo.done ? 'true' : 'false'}</li>
                    )
                }
                </ul>
            </div>
        </div>
    )
}

export default Counter;