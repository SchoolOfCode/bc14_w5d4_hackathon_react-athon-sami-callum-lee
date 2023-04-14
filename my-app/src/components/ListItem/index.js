import React from "react";
import "./ListItem.css";

function ListItem({item, index, indexDelete}) {
  return (
    <div className="list-item">
      <div className = "list_button_div">
      <li className="todo-item">{item}</li>
      <button className="delete_button" onClick={() => indexDelete(index)}> 
        Delete
      </button> 
      </div>
    </div> //indexDelete is the function that deletes the item from the list
  );
}

export default ListItem;

