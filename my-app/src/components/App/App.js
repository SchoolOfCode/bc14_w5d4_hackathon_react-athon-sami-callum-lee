import React from "react";
import { useState } from "react";
import "./App.css";
import Input from "../Input";
import List from "../List";

function App() {
  const [inputChange, setInputChange] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleInputChange(event) {
    setInputChange(event.target.value);
  }
  function addListItem() {
    if (inputChange !== "") {
      setListItems([...listItems, inputChange]);
      setInputChange("");
    }
  }

  /*
Need to add a delete button, which will delete the individual li item from the list.
So once clicked, deletes the li.
we will need to use items.slice() to create a copy of the array, 
and then use the .slice() method to remove the item at the index of the item we want to delete.
*/

  function deleteListItem(index) {
    const newList = listItems.slice();
    newList.splice(index, 1);
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
        <List items={listItems} indexDelete={deleteListItem} />
      </main>
    </div>
  );
}
export default App;
