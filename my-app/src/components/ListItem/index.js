import React from "react";
import "./ListItem.css";

function ListItem({item, index, indexDelete}) {
  return (
    <div className="list-item">
      <li className="todo-item">{item}</li>
      <button className="delete_button" onClick={() => indexDelete(index)}>
        Delete
      </button>
    </div>
  );
}

export default ListItem;

