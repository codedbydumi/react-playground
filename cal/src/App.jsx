import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [pendingOperator, setPendingOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [activeOperator, setActiveOperator] = useState(null);

  const operators = ['+', '-', '*', '/'];

  // Handle keyboard input
  const handleKeyPress = useCallback((event) => {
    const { key } = event;
    
    if (key >= '0' && key <= '9') {
      inputDigit(key);
    } else if (key === '.') {
      inputDecimal();
    } else if (operators.includes(key)) {
      performOperation(key);
    } else if (key === 'Enter' || key === '=') {
      calculate();
    } else if (key === 'Escape') {
      clear();
    } else if (key === 'Backspace') {
      deleteLast();
    }
  }, [calc, result, waitingForOperand, pendingOperator, previousValue]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setCalc(String(digit));
      setWaitingForOperand(false);
    } else {
      setCalc(calc === '0' ? String(digit) : calc + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setCalc('0.');
      setWaitingForOperand(false);
    } else if (calc.indexOf('.') === -1) {
      setCalc(calc + '.');
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(calc);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (pendingOperator) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, pendingOperator);

      setCalc(String(newValue));
      setResult(`${formatNumber(currentValue)} ${pendingOperator} ${formatNumber(inputValue)} = ${formatNumber(newValue)}`);
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setPendingOperator(nextOperator);
    setActiveOperator(nextOperator);
  };

  const calculate = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(calc);

    if (previousValue !== null && pendingOperator) {
      const newValue = calculate(previousValue, inputValue, pendingOperator);
      
      setCalc(String(newValue));
      setResult(`${formatNumber(previousValue)} ${pendingOperator} ${formatNumber(inputValue)} = ${formatNumber(newValue)}`);
      setPreviousValue(null);
      setPendingOperator(null);
      setWaitingForOperand(true);
      setActiveOperator(null);
    }
  };

  const clear = () => {
    setCalc('');
    setResult('');
    setPreviousValue(null);
    setPendingOperator(null);
    setWaitingForOperand(false);
    setActiveOperator(null);
  };

  const allClear = () => {
    clear();
    setCalc('0');
  };

  const deleteLast = () => {
    if (calc.length > 1) {
      setCalc(calc.slice(0, -1));
    } else {
      setCalc('0');
    }
  };

  const formatNumber = (num) => {
    if (num % 1 === 0) {
      return num.toString();
    }
    return parseFloat(num.toFixed(8)).toString();
  };

  const createParticle = (e) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1000);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i <= 9; i++) {
      digits.push(
        <button
          key={i}
          className="digit-btn"
          onClick={(e) => {
            inputDigit(i.toString());
            createParticle(e);
          }}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const displayValue = calc || '0';
  const isOperatorActive = (operator) => activeOperator === operator;

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="previous-operand">
            {result || (previousValue !== null && pendingOperator ? `${formatNumber(previousValue)} ${pendingOperator}` : '')}
          </div>
          <div className="current-operand">
            {formatNumber(parseFloat(displayValue) || 0)}
          </div>
        </div>
        
        <div className="buttons">
          <div className="top-row">
            <button
              className="ac-btn"
              onClick={(e) => {
                allClear();
                createParticle(e);
              }}
            >
              AC
            </button>
            <button
              className="clear-btn"
              onClick={(e) => {
                clear();
                createParticle(e);
              }}
            >
              C
            </button>
          </div>

          <div className="operators">
            <button
              className="delete-btn"
              onClick={(e) => {
                deleteLast();
                createParticle(e);
              }}
            >
              ⌫
            </button>
            <button
              className={`operator-btn ${isOperatorActive('/') ? 'active' : ''}`}
              onClick={(e) => {
                performOperation('/');
                createParticle(e);
              }}
            >
              ÷
            </button>
            <button
              className={`operator-btn ${isOperatorActive('*') ? 'active' : ''}`}
              onClick={(e) => {
                performOperation('*');
                createParticle(e);
              }}
            >
              ×
            </button>
            <button
              className={`operator-btn ${isOperatorActive('-') ? 'active' : ''}`}
              onClick={(e) => {
                performOperation('-');
                createParticle(e);
              }}
            >
              −
            </button>
          </div>

          <div className="digits">
            {createDigits()}
          </div>

          <div className="bottom-row">
            <button
              className="digit-btn zero"
              onClick={(e) => {
                inputDigit('0');
                createParticle(e);
              }}
            >
              0
            </button>
            <button
              className="digit-btn"
              onClick={(e) => {
                inputDecimal();
                createParticle(e);
              }}
            >
              .
            </button>
            <button
              className={`operator-btn ${isOperatorActive('+') ? 'active' : ''}`}
              onClick={(e) => {
                performOperation('+');
                createParticle(e);
              }}
            >
              +
            </button>
          </div>

          <button
            className="equals-btn"
            onClick={(e) => {
              performCalculation();
              createParticle(e);
            }}
            style={{ 
              marginTop: '16px',
              height: '64px',
              borderRadius: '20px',
              fontSize: '24px',
              fontWeight: '600'
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;