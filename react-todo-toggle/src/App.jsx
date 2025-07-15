import React, { useState, useEffect } from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import ThemeToggle from './components/ThemeToggle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

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

  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Todo App</h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>

        <TodoForm onAddTodo={addTodo} />

        <div className="stats">
          <span>Total: {stats.total}</span>
          <span>Active: {stats.active}</span>
          <span>Completed: {stats.completed}</span>
        </div>

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;