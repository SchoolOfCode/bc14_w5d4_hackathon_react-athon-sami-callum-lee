import React from 'react';
import './ListItem.css'

function ListItem(props){

    return (
        <div className = "list-item">
            <li className = "todo-item">{props.item}</li>
            <button className = "delete_button">Delete</button>
        </div>
    )
}

export default ListItem