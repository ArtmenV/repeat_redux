import React, { Component } from "react";
import { connect } from 'react-redux'
import { increment, decrement } from '../../ac'


class Counter extends Component {

  render() {
    const {number, plusCounter, minusCounter} = this.props
      return (
        <>
          <h1> {number} </h1>
          <button onClick={plusCounter}>+</button>
          <button onClick={minusCounter}>-</button>
        </>
      );
    }
  }

  export default connect(state => ({
    number: state.counter
  }), { plusCounter: increment, 
        minusCounter: decrement })(Counter)