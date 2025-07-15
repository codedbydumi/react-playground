import React, { useState } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  
  const ops = ["/", "*", "+", "-", "."];
  
  const updateCalc = (value) => {
    setCalc(calc + value);
  };
  
  const calculate = () => {
    try {
      // Simple calculation using eval (note: in production, use a proper math parser)
      const calculatedResult = eval(calc);
      setResult(calculatedResult.toString());
      setCalc(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };
  
  const deleteLast = () => {
    setCalc(calc.slice(0, -1));
  };
  
  const clear = () => {
    setCalc("");
    setResult("");
  };
  
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button 
          key={i} 
          className="digit-btn"
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span className="previous-operand">{result && `= ${result}`}</span>
          <span className="current-operand">{calc || "0"}</span>
        </div>
        <div className="buttons">
          <div className="operators">
            <button 
              className="operator-btn"
              onClick={() => updateCalc("/")}
            >
              /
            </button>
            <button 
              className="operator-btn"
              onClick={() => updateCalc("*")}
            >
              *
            </button>
            <button 
              className="operator-btn"
              onClick={() => updateCalc("+")}
            >
              +
            </button>
            <button 
              className="operator-btn"
              onClick={() => updateCalc("-")}
            >
              -
            </button>
            <button 
              className="delete-btn"
              onClick={deleteLast}
            >
              DEL
            </button>
          </div>
          <div className="digits">
            {createDigits()}
            <button 
              className="digit-btn zero"
              onClick={() => updateCalc("0")}
            >
              0
            </button>
            <button 
              className="digit-btn"
              onClick={() => updateCalc(".")}
            >
              .
            </button>
            <button 
              className="equals-btn"
              onClick={calculate}
            >
              =
            </button>
          </div>
          <div className="clear-section">
            <button 
              className="clear-btn"
              onClick={clear}
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;