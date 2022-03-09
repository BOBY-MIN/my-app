import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

const number = (state = initialState, action: { type: any; }) => {
    switch(action.type) {
        case types.INCREMENT: 
            console.log('INCREMENT reducer 호출');
            return {
                number: state.number + 1
            };
        case types.DECREMENT:
            console.log('DECREMENT reducer 호출');
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default number;