import React, { Component, useReducer } from 'react';
import Display from "./display.js";
import NumbersPlate from "./numbers.js";
import "./styles/calculator-styles.css";

const initialState = {
  num1: "",
  num2: "",
  oprator: null,
  display: 0,
}

const reducer = (state, action) => {
  console.log("a ction==", action)
  switch(action.type) {
    case "oprator":
      return {
        ...state,
        oprator: action.payload
      }
    case "number":
      const whichNum = state.oprator ? "num2" : "num1";
      const getStringValue = `${state[whichNum]}`;
      const value = getStringValue.concat(action.payload),
      return {
        ...state,
        [whichNum]: `${value}`,
        display: value
      }
    case "result":
      const {num1, num2, oprator} = state;
      return {
        ...state,
        display: eval(`${num1} ${oprator} ${num2}`),
        num1: "",
        num2: "",
        oprator: null,
      }
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div className="calculator-wrapper">
        <Display value={state.display} />
        <NumbersPlate dispatch={dispatch}/>
      </div>
    );
}

export default Calculator;