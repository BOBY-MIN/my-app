import React from 'react';
import Buttons from 'components/Buttons';
import CounterListContainer from 'containers/CounterListContainer';

import * as actions from 'actions';
import { connect } from 'react-redux';

import { getRandomColor } from 'utils';


class Count extends React.Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div>
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        )
    }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
// connect 함수를 수행함으로써 redux 의 subscribe 처리까지 완료함.
export default connect(null, mapToDispatch)(Count);