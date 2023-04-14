import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="list-item">
      <li className="todo-item">{props.item}</li>
      <button className="delete_button" onClick={props.indexDelete}>
        Delete
      </button>
    </div>
  );
}

export default ListItem;
