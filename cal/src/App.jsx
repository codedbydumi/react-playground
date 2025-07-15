import React from 'react';
import './App.css';

function App() {

  const [calc , setCals] = useState("");
  const [result,setResult] = useState



  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} className="digit-btn">{i}</button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span className="previous-operand">(0)</span>
          <span className="current-operand">0</span>
        </div>
        <div className="buttons">
          <div className="operators">
            <button className="operator-btn">/</button>
            <button className="operator-btn">*</button>
            <button className="operator-btn">+</button>
            <button className="operator-btn">-</button>
            <button className="delete-btn">DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button className="digit-btn zero">0</button>
            <button className="digit-btn">.</button>
            <button className="equals-btn">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;