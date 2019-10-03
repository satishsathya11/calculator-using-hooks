import React, { Component } from 'react';
import "./styles/display-styles.css";

const Display = ({value}) => {
  return (
      <div className="display-wrapper">
        <h3>{value}</h3>
      </div>
    );
}

export default Display;