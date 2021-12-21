import React from 'react';
import PropTypes from 'prop-types';

import 'components/Button.css';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>
                생성
            </div>
            <div className="btn remove" onClick={onRemove}>
                제거
            </div>
        </div>
    );
};

// props에 대한 type 지정
Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;