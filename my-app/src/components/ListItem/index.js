import React from "react";
import "./ListItem.css";

function ListItem({item, index, indexDelete, onCheckButton}) {
  return (
    <div className="list-item">
      <div className="list_button_div">
        <li className="todo-item">{item}</li>
        <button className="delete_button" onClick={() => indexDelete(index)}> 
          Delete
        </button> 
        <input type="checkbox" id={`checkBtn-${index}`} className="checkBtn" onClick={() => onCheckButton(index)}></input>
        <label htmlFor={`checkBtn-${index}`} className="checkBtn_label"><span>&#10003;</span></label>
      </div>
    </div>
  );
}

export default ListItem;

