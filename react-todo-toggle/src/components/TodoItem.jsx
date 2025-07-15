import React, { useState } from 'react';
import { Edit2, Trash2, Check, X } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editValue.trim()) {
      onEdit(todo.id, editValue.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button 
        onClick={() => onToggle(todo.id)}
        className="toggle-btn"
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && <Check size={16} />}
      </button>
      
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="edit-input"
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="save-btn">
              <Check size={16} />
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              <Edit2 size={16} />
            </button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">
              <Trash2 size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;