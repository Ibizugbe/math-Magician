/* eslint-disable  react/prefer-stateless-function */
import React, { useState } from "react";
import "animate.css";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    const value = e.target.name;
    const result = calculate(state, value);
    setState(result);
  };

  const displayResult = (e) => {
    setState({
      total: e.target.name,
    });
  };

  const { total, next, operation } = state;
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 pt-5 mt-5">
              <p className="calculator-text pt-5 mt-5 ps-5 animate__animated animate__zoomInUp">
                Let&lsquo;s do some math ==&gt;
              </p>
            </div>
            <div className="col-6 d-flex justify-content-center pt-5 mt-5">
              <div className="calculator-container animate__animated animate__rubberBand">
                <div
                  className="calculator-display animate__animated animate__bounceInRight"
                  onChange={displayResult}
                >
                  <h1>
                    {total}
                    {operation}
                    {next}
                  </h1>
                </div>
                <div className="calculator-keys animate__animated animate__bounce">
                  <button type="button" name="+/-" onClick={handleClick}>
                    +/-
                  </button>
                  <button type="button" name="AC" onClick={handleClick}>
                    AC
                  </button>
                  <button type="button" name="%" onClick={handleClick}>
                    %
                  </button>
                  <button
                    type="button"
                    name="&#247;"
                    onClick={handleClick}
                    className="bg-orange"
                  >
                    &#247;
                  </button>
                  <button type="button" name="7" onClick={handleClick}>
                    7
                  </button>
                  <button type="button" name="8" onClick={handleClick}>
                    8
                  </button>
                  <button type="button" name="9" onClick={handleClick}>
                    9
                  </button>
                  <button
                    type="button"
                    name="x"
                    onClick={handleClick}
                    className="bg-orange"
                  >
                    &times;
                  </button>
                  <button type="button" name="4" onClick={handleClick}>
                    4
                  </button>
                  <button type="button" name="5" onClick={handleClick}>
                    5
                  </button>
                  <button type="button" name="6" onClick={handleClick}>
                    6
                  </button>
                  <button
                    type="button"
                    name="-"
                    onClick={handleClick}
                    className="bg-orange"
                  >
                    -
                  </button>
                  <button type="button" name="1" onClick={handleClick}>
                    1
                  </button>
                  <button type="button" name="2" onClick={handleClick}>
                    2
                  </button>
                  <button type="button" name="3" onClick={handleClick}>
                    3
                  </button>
                  <button
                    type="button"
                    name="+"
                    onClick={handleClick}
                    className="bg-orange"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    name="0"
                    onClick={handleClick}
                    className="span-2"
                  >
                    0
                  </button>
                  <button type="button" name="." onClick={handleClick}>
                    .
                  </button>
                  <button
                    type="button"
                    name="="
                    onClick={handleClick}
                    className="bg-orange"
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calculator;
