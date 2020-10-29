import React, { Component } from 'react';
import Button_1 from './Button_1';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>더하기</button>
        <button onClick={this.handleDecrease}>빼기</button>
      </div>
    );
  }
}

export default Counter;
