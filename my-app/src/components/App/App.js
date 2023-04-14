import React from "react";
import { useState } from "react";
import "./App.css";
import Input from "../Input";
import List from "../List";

function App() {
  const [inputChange, setInputChange] = useState(""); // inputChange is the state of the input field
  const [listItems, setListItems] = useState([]); // listItems is the state of the list
  

  function handleInputChange(event) {
    setInputChange(event.target.value);
  }
  function addListItem() {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main>
        <Input
          value={inputChange}
          onChange={handleInputChange}
          addListItem={addListItem}
        />
        <List items={listItems} indexDelete={deleteListItem}  />
      </main>
    </div>
  );
}
export default App;
