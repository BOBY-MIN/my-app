import { createAction, handleActions } from "redux-actions";
import { Map, List } from 'immutable';

// 액션 타입
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';


// 액션생성자
// 액션생성자의 경우 외부에서 사용하므로 export 를 붙임.
export const create = createAction(CREATE); // 매개변수 color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // 매개변수 index
export const decrement = createAction(DECREMENT); // 매개변수 index
export const setColor = createAction(SET_COLOR); // 매개변수 { index, color }


// 초기 상태 정의
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})


// handleActions 를 이용한 reducer 생성 (첫번째는 매개변수는 액션 reducer 함수, 두번째 매개변수는 초기값)
// handleActions 를 사용함으로써 변수의 scope를 action 단위로 분리할 수 있음.
// reducers/index.js 의 reducer 함수는 scope가 함수 내에서 동일함.
// scope가 동일하다는 것은 switch문의 action 마다 필요한 변수를 전부 다른 이름으로 지어야 한다는 말임.
export default handleActions({
    // [] 로 감싸는 이유는 액션타입에 접두사가 들어가 있기 때문임.
    [CREATE]: (state, action) => {
        
        const counters = state.get('counters');

        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0
            })
        ));

    },
    [REMOVE]: (state, action) => {

        const counters = state.get('counters');

        return state.set('counters', counters.pop());

    },
    [INCREMENT]: (state, action) => {

        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') + 1)
        ));

    },
    [DECREMENT]: (state, action) => {

        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') - 1)
        ));

    },
    [SET_COLOR]: (state, action) => {

        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload.index,
            (counter) => counter.set('color', action.payload.color)
        ));

    },
}, initialState);