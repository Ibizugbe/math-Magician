/* eslint-disable  react/prefer-stateless-function */
import React from 'react';
import 'animate.css';

class Calculator extends React.Component {
  render() {
    return (
      <main>
        <div className="calculator-container animate__animated animate__rubberBand">
          <div className="calculator-display animate__animated animate__bounceInRight">
            <h1>0</h1>
          </div>
          <div className="calculator-keys animate__animated animate__bounce">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="bg-orange">/</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="bg-orange">&times;</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="bg-orange">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="bg-orange">+</button>
            <button type="button" className="span-2">0</button>
            <button type="button">.</button>
            <button type="button" className="bg-orange">=</button>
          </div>
        </div>
      </main>
    );
  }
}

export default Calculator;
