

import React from 'react';
import PropTypes from 'prop-types';
import 'components/Counter.css';

/*
    좌클릭 : 증가
    우클릭 : 감소
    더블클릭 : 컬러셋팅
*/
const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {

    return (
        <div
            className="Counter"
            onClick={onIncrement}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

// props에 대한 type 지정
Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
};

// props에 대한 기본값 지정
Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;