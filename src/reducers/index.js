// // combine reducer 제거
// import number from 'reducers/number';
// import color from 'reducers/color';
// import { combineReducers } from 'redux';

/*
    서브 리듀서들을 하나로 합칩니다.
    combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
    지금의 경우:
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
    로 만들어집니다.
*/


// // combine reducer 제거
// const reducers = combineReducers({
//     numberData: number,
//     colorData: color
// });

// export default reducers;


// 기존 reducer 를 subreducer로 분리 후 combineReducers 방식으로 변경함.
// // 초기 상태를 정의합니다
// const initialState = {
//     color: 'black',
//     number: 0
// };


// /* 
//     리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
//     state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
//     action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
//     이 때 주의 할 점은 state 를 직접 수정하면 안되고,
//     기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
// */
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1
//             };

//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number - 1
//             };

//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             };

//         default:
//             return state;
//     }
// };

// export default counter;


//////////////// counter 여러 개 처리를 위해 reducer 새로 정의
import * as types from 'actions/ActionTypes';
import { Map, List } from 'immutable';

// 초기 상태 정의
const initialState = Map({
    // immutable 쓰는 방식으로 변환
    // counters: [
    //     {
    //         color: 'black',
    //         number: 0
    //     }
    // ]
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})

// reducer 함수 정의
// immutable 쓰는 방식으로 변환
function reducer(state = initialState, action) {

    // 레퍼런스 생성(코드 가독성을 위해서 미리 할당)
    // 구조분해할당 방식으로 값 초기화
    // const { counters } = state;

    const counters = state.get('counters');

    // reducer 함수 내에서도 기존 배열에 직접 접근(push() 또는 pop())하는 것은 하면 안됨.(불변성 유지는 필수)
    // spread 문법이나 slice() 함수와 같이 기존 배열을 이용해 새로운 배열을 전달해주는 방식으로 처리(객체도 마찬가지)

    // immutable 은 set(), push(), pop(), delete() 등을 해도 
    // 기존 리스트를 수정하지 않고, 마지막 값을 제거한 새로운 리스트를 반환함.
    // 그러므로 위에 기재한 일반 배열에 대한 push() / pop() 과는 다르게 불변성을 유지해줌.
    switch(action.type) {
        // counter 추가
        case types.CREATE:
            // return {
            //     counters: [
            //         ...counters,
            //         {
            //             color: action.color,
            //             number: 0
            //         }
            //     ]
            // };
            
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })));

        // slice 를 이용하여 맨 마지막 카운터 제외
        case types.REMOVE:
            // return {
            //     counters: counters.slice(0, counters.length - 1)
            // };

            return state.set('counters', counters.pop());

        // action.index 번째 카운터의 number에 1을 더함.
        case types.INCREMENT:
            // return {
            //     counters: [
            //         ...counters.slice(0, action.index), // 0 ~ action.index 사이의 아이템들을 잘라 넣음.
            //         {
            //             ...counters[action.index], // action.index 에 해당하는 객체에 기존값은 유지
            //             number: counters[action.index].number + 1 // number 값에 대해서는 새값으로 셋팅
            //         },
            //         ...counters.slice(action.index + 1, counters.length) // action.index + 1 ~ 마지막 인덱스의 아이템들을 잘라 넣음.
            //     ]
            // };

            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));

        // action.index 번째 카운터의 number 에 1 을 뺌.
        case types.DECREMENT:
            // return {
            //     counters: [
            //         ...counters.slice(0, action.index),
            //         {
            //             ...counters[action.index],
            //             number: counters[action.index].number - 1
            //         },
            //         ...counters.slice(action.index + 1, counters.length)
            //     ]
            // };

            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') - 1)
            ));

        // action.index 번째 카운터의 색상을 변경함.
        case types.SET_COLOR:
            // return {
            //     counters: [
            //         ...counters.slice(0, action.index),
            //         {
            //             ...counters[action.index],
            //             color: action.color
            //         },
            //         ...counters.slice(action.index + 1, counters.length)
            //     ]
            // };

            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('color', action.color)
            ));

        default:
            return state;
    }

}

export default reducer