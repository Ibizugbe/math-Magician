/* eslint-disable  react/prefer-stateless-function */
import React from 'react';
import 'animate.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.name);
    this.setState(result);
  };

  displayResult = (e) => {
    this.setState({
      total: e.target.name,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <main>
        <div className="calculator-container animate__animated animate__rubberBand">
          <div className="calculator-display animate__animated animate__bounceInRight" onChange={this.displayResult}>
            <h1>
              {total}
              {operation}
              {next}
            </h1>
          </div>
          <div className="calculator-keys animate__animated animate__bounce">
            <button type="button" name="+/-" onClick={this.handleClick}>+/-</button>
            <button type="button" name="AC" onClick={this.handleClick}>AC</button>
            <button type="button" name="%" onClick={this.handleClick}>%</button>
            <button type="button" name="&#247;" onClick={this.handleClick} className="bg-orange">&#247;</button>
            <button type="button" name="7" onClick={this.handleClick}>7</button>
            <button type="button" name="8" onClick={this.handleClick}>8</button>
            <button type="button" name="9" onClick={this.handleClick}>9</button>
            <button type="button" name="x" onClick={this.handleClick} className="bg-orange">&times;</button>
            <button type="button" name="4" onClick={this.handleClick}>4</button>
            <button type="button" name="5" onClick={this.handleClick}>5</button>
            <button type="button" name="6" onClick={this.handleClick}>6</button>
            <button type="button" name="-" onClick={this.handleClick} className="bg-orange">-</button>
            <button type="button" name="1" onClick={this.handleClick}>1</button>
            <button type="button" name="2" onClick={this.handleClick}>2</button>
            <button type="button" name="3" onClick={this.handleClick}>3</button>
            <button type="button" name="+" onClick={this.handleClick} className="bg-orange">+</button>
            <button type="button" name="0" onClick={this.handleClick} className="span-2">0</button>
            <button type="button" name="." onClick={this.handleClick}>.</button>
            <button type="button" name="=" onClick={this.handleClick} className="bg-orange">=</button>
          </div>
        </div>
      </main>
    );
  }
}

export default Calculator;
