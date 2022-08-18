import React from "react";

import Avatar from "../../atoms/avatar/Avatar";
import Caption from "../../atoms/caption/Caption";
import Rating from "../../atoms/rating/Rating";

import { StyledPlaceReview } from "./review.styled";

function Review({ photo, username, rating, submitted, text }: ReviewProps) {
  const getDate = (time: number) => {
    return new Date(time * 1000).toLocaleDateString("en-GB");
  };

  return (
    <StyledPlaceReview className="place-review">
      <Avatar size="small" className="place-review__img" src={photo} />
      <h5 className="place-review__author-name">{username || "Unknown"}</h5>
      <Rating
        color="gold"
        className="place-review__rating"
        variant="star"
        rating={rating}
      />
      <Caption className="place-review__date">{getDate(submitted)}</Caption>
      <p className="place-review__text">{text}</p>
    </StyledPlaceReview>
  );
}

export interface ReviewProps {
  photo: string;
  username: string;
  rating: number;
  submitted: number;
  text: string;
}

export default Review;

// FIXME Tests are suitable more for visual and snapshot
