import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
  const [userInput,setSomething]=useState({
    name:"",
  });

  const handleNameChange = event =>{
    const newObject = {
      name:event.target.value
    
    }
    
  }
  
  return (
    <div className="App">
       <label>name:</label>
      <input placeholder='Name'onChange={handleNameChange} value={userInput} ></input>
    
      <button onClick={handleNameChange}>Button</button>
    </div>
  );
}

export default App;
