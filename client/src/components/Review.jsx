import React from "react";
import { Button } from "@mui/material";

const Review = (props) => {
  const { input, handleChangeInput, leaveReview, onClickStar } = props;
  return (
    <>
      <h4>Write a review</h4>
      <div className="review-container">
        <div className="review-star-container">
          <button
            className="review-star"
            onClick={() => {
              onClickStar(1);
            }}
          >
            *
          </button>
          <button
            className="review-star"
            onClick={() => {
              onClickStar(2);
            }}
          >
            *
          </button>
          <button
            className="review-star"
            onClick={() => {
              onClickStar(3);
            }}
          >
            *
          </button>
          <button
            className="review-star"
            onClick={() => {
              onClickStar(4);
            }}
          >
            *
          </button>
          <button
            className="review-star"
            onClick={() => {
              onClickStar(5);
            }}
          >
            *
          </button>
        </div>
        <input
          type="textarea"
          id="comment"
          value={input.comment}
          onChange={handleChangeInput}
        />
        <Button
          variant="contained"
          onClick={() => {
            leaveReview(11, 4);
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Review;
