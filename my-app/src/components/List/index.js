import React from "react";
import "./List.css";
import ListItem from "../ListItem";

function List({ items, indexDelete }) {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          indexDelete={indexDelete}
        /> /*Inside the component, it uses the map() function to iterate over each item in the items array. For each item, it renders a child component called ListItem. 
                                                  The map() function returns an array of ListItem components with the item and key props passed in.*/
      ))}
    </div>
  );
}

export default List;
