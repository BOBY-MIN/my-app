// 액션에 들어가게 될 type 선언, TypeScript의 type이 아님
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// 내부 값을 payload 라는 변수로 칭하는 규칙이 있음.
// FSA 규칙 : https://github.com/redux-utilities/flux-standard-action
export const increaseBy = (diff: number) => ({ 
    type: INCREASE_BY
    ,payload: diff
});

// interface CounterAction {
//     payload:
//         ReturnType<typeof increase>
//         |
//         ReturnType<typeof decrease>
//         |
//         ReturnType<typeof increaseBy>
// }

type CounterAction = 
        ReturnType<typeof increase>
        |
        ReturnType<typeof decrease>
        |
        ReturnType<typeof increaseBy>;

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;