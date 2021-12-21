import React from 'react';
import PropTypes from 'prop-types';
import 'components/Counter.css';

/*
    좌클릭 : 증가
    우클릭 : 감소
    더블클릭 : 컬러셋팅
*/
const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {

    return (
        <div
            className="Counter"
            onClick={() => onIncrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement(index);
                }
            }
            onDoubleClick={() => onSetColor(index)}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

// props에 대한 type 지정
Counter.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
};

// props에 대한 기본값 지정
Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;