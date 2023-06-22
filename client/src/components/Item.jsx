import React from "react";

const Item = (props) => {
  const { itemImage, itemName, itemRating, itemDescription } = props;
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={itemImage} />
      </div>
      <div className="item-info-container">
        <div className="item-info-row1">
          <div className="item-name">{itemName}</div>
          <div className="like-button">like</div>
        </div>
        <div className="item-info-row2">
          <div className="item-rating">{itemRating}</div>
          <div className="item-description">{itemDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
