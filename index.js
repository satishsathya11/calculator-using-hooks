import React, { Component } from 'react';
import { render } from 'react-dom';
import Calculator from "./src";
import './app-styles.css';

const App = () => {
  return (
      <>
       <h3 className="title">Calculator App using "React-Hooks"!!</h3>
      <Calculator />
      </>
    );
}

render(<App />, document.getElementById('root'));
