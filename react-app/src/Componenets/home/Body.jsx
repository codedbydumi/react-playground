import React, { useState } from 'react'; // ✅ import useState here
import './Main.css'

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
    <main >

      <h2>Fruit List</h2>
   
    <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add
      </button>
    </main>
  );
}

export default Body;
