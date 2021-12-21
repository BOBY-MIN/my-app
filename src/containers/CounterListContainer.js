import CounterList from 'components/CounterList';
import * as actions from 'actions';
import { connect } from 'react-redux';
import { getRandomColor } from 'utils';

// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) => ({
    counters: state.counters
});

/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만든 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
});


// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);


export default CounterListContainer;