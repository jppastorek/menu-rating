import React from "react";
import Item from "./Item";

const ItemDisplay = (props) => {
  const { items, searchValue } = props;

  if (items.length) {
    return items.map((item) => {
      return (
        <Item
          key={item.item_id}
          name={item.item_name}
          price={item.price}
          rating={item.avg_rating}
          num_of_ratings={item.num_of_ratings}
          description={item.item_description}
        />
      );
    });
  }else {
    return `${searchValue} not found.`
  }
  
};

export default ItemDisplay;