import React, { useState } from 'react'; // ✅ import useState here

function Body() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <main style={{ padding: '20px' }}>

      <h2>Fruit List</h2>
    <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add
      </button>
    </main>
  );
}

export default Body;
