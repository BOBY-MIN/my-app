import * as types from 'actions/ActionTypes';

const initialState = {
    color: 'black'
};

const color = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COLOR:
            console.log('SET_COLOR reducer 호출');
            return {
                color: action.color
            };

        default:
            return state;
    }
}

export default color;