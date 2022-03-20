import React, { useReducer } from 'react';

interface Action {
    attr: 
        {type: 'INCREASE';}
        |
        {type: 'DECREASE';}
}

function reducer(state: number, action: Action): number {
    
    switch (action.attr.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function CounterReduce(){
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ attr: { type: 'INCREASE' } });
    const onDecrease = () => dispatch({ attr: { type: 'DECREASE' } });
    return (
        <div>
            <h1>CounterWithReduce</h1>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default CounterReduce;