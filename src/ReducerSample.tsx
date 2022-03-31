import React, { useReducer } from "react";


interface Color {
    attr: 'red' | 'orange' | 'yellow';
}

interface State {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

interface Action {
    attr:
        { type: 'SET_COUNT'; count: number; }
        |
        { type: 'SET_TEXT'; text: string; }
        |
        { type: 'SET_COLOR'; color: Color; }
        |
        { type: 'TOGGLE_GOOD'; isGood: boolean; }
}

function reducer(state: State, action: Action): State {
    switch (action.attr.type) {
        case 'SET_COLOR' :
            return {
                ...state
                ,color: action.attr.color
            };
        case 'SET_COUNT' :
            return {
                ...state
                ,count: action.attr.count
            };
        case 'SET_TEXT' :
            return {
                ...state
                ,text: action.attr.text
            };
        case 'TOGGLE_GOOD' :
            return {
                ...state
                ,isGood: !action.attr.isGood
            };
        default:
            throw new Error('Unhandled action');
    }
}

function ReducerSample() {

    const [state, dispatch] = useReducer(reducer, {
        count: 0
        ,text: 'test'
        ,color: { attr: 'red' }
        ,isGood: true
    });

    const setCount = () => dispatch({ attr: { type: 'SET_COUNT', count: 5 } });
    const setText = () => dispatch({ attr: { type: 'SET_TEXT', text: 'bye' } });
    const setColor = () => dispatch({ attr: { type: "SET_COLOR", color: { attr: "orange"} } });
    const toggleGood = () => dispatch({ attr: { type: "TOGGLE_GOOD", isGood: false } });

    return (
        <div>
        <p>
            <code>count: </code> {state.count}
        </p>
        <p>
            <code>text: </code> {state.text}
        </p>
        <p>
            <code>color: </code> {state.color.attr}
        </p>
        <p>
            <code>isGood: </code> {state.isGood ? 'true' : 'false'}
        </p>
        <div>
            <button onClick={setCount}>SET_COUNT</button>
            <button onClick={setText}>SET_TEXT</button>
            <button onClick={setColor}>SET_COLOR</button>
            <button onClick={toggleGood}>TOGGLE_GOOD</button>
        </div>
        </div>
    );

}

export default ReducerSample;