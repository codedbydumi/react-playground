import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

// Filter Buttons Component
const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

// Stats Component
const Stats = ({ todos }) => {
  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  return (
    <div className="stats">
      <div className="stat-card">
        <span className="stat-number">{stats.total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-card">
        <span className="stat-number">{stats.active}</span>
        <span className="stat-label">Active</span>
      </div>
      <div className="stat-card">
        <span className="stat-number">{stats.completed}</span>
        <span className="stat-label">Completed</span>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [filter, setFilter] = useState('all');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Todo App</h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>

        <TodoForm onAddTodo={addTodo} />

        <Stats todos={todos} />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={filteredTodos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
};

export default App;