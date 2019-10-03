import React, { Component } from 'react';
import "./styles/numbers-styles.css";

const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "="];
const opratorsArray = ["÷", "x", "-", "+"];

const clickAction = (type, value) => {
  const tempType = value === "=" ? "result" : type;
  return {
    type: tempType,
    payload: value
  }
}

const  NumbersPlate = ({dispatch}) => {
  return (
    <div className="numbers-oprator-wrapper">
        <div className="nunmbers">
        {
          numbersArray.map(n => <Button number={n} onClick={() => dispatch(clickAction("number", n))}/>)
        }
        </div>
        <div className="oprator">
          {
            opratorsArray.map(n => <Button number={n} onClick={() => dispatch(clickAction("oprator", n))}/>)
          }
        </div>
    </div>
    );
}

const Button = ({number, onClick}) => {
  return <button className="number-button" onClick={onClick}>{number}</button>
}

export default  NumbersPlate;