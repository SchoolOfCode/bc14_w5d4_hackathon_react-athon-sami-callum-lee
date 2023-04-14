import React from "react";
import "./ListItem.css";

function ListItem({item, indexDelete}) {
  return (
    <div className="list-item">
      <li className="todo-item">{item}</li>
      <button className="delete_button" onClick={indexDelete}>
        Delete
      </button>
    </div>
  );
}

export default ListItem;
