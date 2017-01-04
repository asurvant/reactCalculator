import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: 0
    }

    this.linkState = this.linkState.bind(this);
    this.addThings = this.addThings.bind(this);
    this.subThings = this.subThings.bind(this);
    this.divThings = this.divThings.bind(this);
    this.multThings = this.multThings.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  linkState(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addThings() {
    this.setState({
      result: Number(this.state.num1) + Number(this.state.num2)
    });
  }

  subThings() {
    this.setState({
      result: Number(this.state.num1) - Number(this.state.num2)
    });
  }

  divThings() {
    this.setState({
      result: Number(this.state.num1) / Number(this.state.num2)
    });
  }

  multThings() {
    this.setState({
      result: Number(this.state.num1) * Number(this.state.num2)
    });
  }

  resetFields() {
    this.setState({
      num1: "",
      num2: "",
      result: 0
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <br />
        <input name="num1" value={this.state.num1} onChange={this.linkState}/>
        <input name="num2" value={this.state.num2} onChange={this.linkState}/>
        <br />
        <button onClick={this.addThings}>+</button>
        <button onClick={this.subThings}>-</button>
        <button onClick={this.divThings}>/</button>
        <button onClick={this.multThings}>*</button>
        <br />
        <button onClick={this.resetFields}>clear</button>
      </div>
    );
  }
}

export default Calculator;
