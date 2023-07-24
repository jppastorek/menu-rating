import React from "react";
import Item from "./Item";

const ItemDisplay = (props) => {
  const { items } = props;

  return items.map((item) => {
    return (
      <Item
        key={item.item_id}
        name={item.item_name}
        price={item.price}
        rating={item.item_rating}
        description={item.item_description}
      />
    );
  });
};

export default ItemDisplay;