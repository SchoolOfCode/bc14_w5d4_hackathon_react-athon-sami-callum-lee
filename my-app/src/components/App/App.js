import React from 'react';
import {useState} from 'react'
import './App.css';
import Input from '../Input'
import List from '../List';

function App() {

  const [inputChange, setInputChange] = useState("")
  const [listItems, setListItems] = useState([]);


  function handleInputChange(event){

    setInputChange(event.target.value)
  }
  function addListItem(){
    if(inputChange !== ""){
      setListItems([...listItems, inputChange])
      setInputChange("")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main>
      <Input value = {inputChange} onChange = {handleInputChange} addListItem = {addListItem}/>
      <List items = {listItems} />
      </main>
    </div>
  );
}

export default App;
