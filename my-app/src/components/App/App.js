import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Input from "../Input";
import List from "../List";

function App() {
  const [inputChange, setInputChange] = useState(""); // inputChange is the state of the input field

  const [listItems, setListItems] = useState([]); // listItems is the state of the list

  const[checkButton, setCheckButton] = useState(false); // checkButton is the state of the check button

  

  function handleInputChange(event) { // this function handles the input change
    setInputChange(event.target.value);
  }
  function addListItem() { // this function adds the input value to the list
    if (inputChange !== "") {
      setListItems([...listItems, inputChange]);
      setInputChange("");
    }
  }

  function deleteListItem(index) {
    const newList = listItems.slice();
    newList.splice(index, 1); // remove the item at index(This is the index in the list component for the li)
    setListItems(newList);
  }

  useEffect(() => {
    console.log(checkButton); // this will log the updated state value
  }, [checkButton]);

  function toggleCheckButton() { // this function toggles the check button
    setCheckButton(prevCheckButton => !prevCheckButton);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">To-Do List</h1>
      </header>
      <main>
        <Input
          value={inputChange}
          onChange={handleInputChange}
          addListItem={addListItem}
        />
        <List 
          items={listItems} 
          indexDelete={deleteListItem}
          onCheckButton={toggleCheckButton}
            
          />
      </main>
    </div>
  );
}
export default App;
