import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
        className="todo-input"
        maxLength={200}
      />
      <button 
        onClick={handleSubmit} 
        className="add-btn"
        disabled={!inputValue.trim()}
        aria-label="Add todo"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default TodoForm;