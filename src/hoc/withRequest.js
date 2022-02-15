import React from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponent) => {
    return class extends React.Component {

        state = {
            name: null
            ,dept: null
        }

        async initialize() {
            try{
                const reponse = await axios.get(url);
                this.setState({
                    name: reponse.data.name
                    ,dept: reponse.data.dept
                });
            }catch(e){
                console.log(e);
            }
        }

        componentDidMount() {
            this.initialize();
        }

        render() {
            const {name, dept} = this.state;
            return (
                <WrappedComponent {...this.props} name={name} dept={dept} />
            )
        }
    }
}

export default withRequest;