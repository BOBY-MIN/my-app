import { render } from "@testing-library/react";
import React from "react";

export default class Expenses extends React.Component {
  
  state = {
    test: "안녕"    
  }

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.setState((state, props) => ({
        test: state.test + props.param
      })
    );
  }

  render() {

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses, {this.state.test}</h2>
      </main>
    );
  
  }  
}
  