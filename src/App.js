import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <div className="input-container">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Enter todo..." 
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      <h1>Todo</h1>
      <div className="todos-container">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

