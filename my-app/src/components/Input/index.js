import React from 'react';
import './Input.css'



function Input({value,onChange,addListItem}){

    

    return (
        <div>
            <input 
            type="text" 
            className="textInput" 
            placeholder="Type Here"
            value={value} 
            onChange={onChange}>     
            </input>
            <button className = "addButton" onClick={addListItem} >Add To List</button>
        </div>
    )

}

export default Input