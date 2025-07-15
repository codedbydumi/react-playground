import React, { useState } from 'react';
import { Edit2, Trash2, Check, X } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editValue.trim() && editValue.trim() !== todo.text) {
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
    } else if (e.key === 'Escape') {
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
          onKeyPress={handleKeyPress}
          onBlur={handleCancel}
          className="edit-input"
          maxLength={200}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button 
              onClick={handleEdit} 
              className="save-btn"
              aria-label="Save changes"
            >
              <Check size={16} />
            </button>
            <button 
              onClick={handleCancel} 
              className="cancel-btn"
              aria-label="Cancel editing"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => setIsEditing(true)} 
              className="edit-btn"
              aria-label="Edit todo"
            >
              <Edit2 size={16} />
            </button>
            <button 
              onClick={() => onDelete(todo.id)} 
              className="delete-btn"
              aria-label="Delete todo"
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;