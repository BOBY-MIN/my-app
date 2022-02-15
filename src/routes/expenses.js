import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";

export default class Expenses extends React.Component {
  
  state = {
    test: "안녕" 
    ,testObj: {} 
  }

  constructor(props) {
    super(props);
  }
  
  async axiosTest() {

    await axios.post("https://8cf123ab-9e73-48a0-abaf-b8ba94c79515.mock.pstmn.io/test/jsonArray")
    .then(res => {
      console.log(res.data);
      this.setState({
        testObj: res.data
      })
    })
    .catch(
      err => console.log(err)
    );
    
    console.log("await test, 늦게 찍히면 성공");

    let testJSON;
    
    try{
      testJSON = await axios.post("https://8cf123ab-9e73-48a0-abaf-b8ba94c79515.mock.pstmn.io/test/jsonArray")
    }catch(e){
      console.log(e);
    }
    
    console.log(JSON.stringify(testJSON));
  }

  componentDidMount() {
    this.setState((state, props) => ({
        test: state.test + props.param
      })
    );
    this.axiosTest();
  }
  
  render() {

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>axios, setState, await 테스트, {this.state.test} {JSON.stringify(this.state.testObj)} </h2>
      </main>
    );
  
  }  
}
  