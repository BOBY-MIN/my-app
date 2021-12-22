import React from 'react';
import Counter from 'components/Counter';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';

import 'components/CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                // immutable 쓰는 방식으로 변환
                // {...counter}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    // immutable 쓰는 방식으로 변환
    // counters: PropTypes.arrayOf(PropTypes.shape({
    //     color: PropTypes.string,
    //     number: PropTypes.number
    // })),
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined'),
}

export default CounterList;