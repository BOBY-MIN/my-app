import React from 'react';
import withRequest from 'hoc/withRequest';

import 'components/PersonalDeptCard.css';

class PersonalDeptCard extends React.Component {

    render() {

        const {dept} = this.props;

        return (
            <div className='PersonalDeptCard'>
                <span>부서 카드</span>
                <span>dept : {dept}</span>
            </div>
        )
    }

}

export default withRequest('https://8cf123ab-9e73-48a0-abaf-b8ba94c79515.mock.pstmn.io/test/json/get')(PersonalDeptCard)