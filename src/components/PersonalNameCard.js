import React from 'react';
import withRequest from 'hoc/withRequest';

import 'components/PersonalNameCard.css';

class PersonalNameCard extends React.Component {

    render() {

        const {name} = this.props;

        return (
            <div className='PersonalNameCard'>
                <span>이름 카드</span>
                <span>name : {name}</span>
            </div>
        )
    }

}

export default withRequest('https://8cf123ab-9e73-48a0-abaf-b8ba94c79515.mock.pstmn.io/test/json/get')(PersonalNameCard)