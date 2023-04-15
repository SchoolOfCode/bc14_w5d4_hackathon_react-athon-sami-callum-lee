
import React from "react";
import "./List.css";                   //Inside the component, it uses the map() function to iterate over each item in the items array. 
import ListItem from "../ListItem";     //items array. For each item, it renders a child component called ListItem. 
                                       //The map() function returns an array of ListItem components with the item and key props passed in.
      

function List({ items, indexDelete, onCheckButton }) { 
 
  return (
    <div className="list_item_container">
      {items.map((item, index) => (
        <ListItem
          key={index} 

          item={item} //item is the value of the input field

          indexDelete={indexDelete} //indexDelete is the function that deletes the item from the list

          index={index} //index is the index of the item in the list for the specific li
          
          onCheckButton={onCheckButton}



        
        />                                       
                                        
      ))}
    </div>
  );
}

export default List;
