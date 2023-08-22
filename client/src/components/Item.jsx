import React from "react";

const Item = (props) => {
  const { image, name, price, rating, description, num_of_ratings } = props;
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-info-container">
        <div className="item-info-row1">
          <div className="item-name-wrapper">
            <div className="item-name">{name}</div>
            <div className="item-price">{price}</div>
          </div>
          <div className="like-button">like</div>
        </div>
        <div className="item-info-row2">
          <div className="item-rating">Rating: {rating}</div>
          <div className="item-num-ratings">({num_of_ratings})</div>
          <div className="item-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
