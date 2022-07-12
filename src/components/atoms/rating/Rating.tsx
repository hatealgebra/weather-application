import React from "react";

import { EmptyStar, FullStar } from "./rating.styled";
import { IoAccessibility } from "react-icons/io5";

import { StyledRatingContainer } from "./rating.styled";

/**
 *
 *
 * @param {number} rating Average number from reviews
 * @return {*}
 */
const showStarRating = (rating: number) => {
  const roundedNumber = Math.round(rating);
  const starsArray = new Array(5);
  return [...starsArray].map((star, i) => {
    if (i + 1 <= roundedNumber) {
      return <FullStar key={i} title="star" data-testid="full-star" />;
    }
    return <EmptyStar key={i} title="star" data-testid="empty-star" />;
  });
};

export const showPopularity = (total: number, color: string) => {
  const figureArray = new Array(3);
  const nrFigures = total >= 5000 ? 3 : total >= 2000 ? 2 : total > 0 ? 1 : 0;
  return [...figureArray].map((figure, i) => {
    if (i + 1 <= nrFigures) {
      return (
        <IoAccessibility
          color={color || "black"}
          key={i}
          title="figure"
          data-testid="full-figure"
        />
      );
    }
    return (
      <IoAccessibility
        color="grey"
        key={i}
        title="figure"
        data-testid="empty-figure"
      />
    );
  });
};

const Rating = ({ rating, className, variant, color }: RatingProps) => {
  switch (variant) {
    case "star":
      return (
        <StyledRatingContainer className={className}>
          {showStarRating(rating)}
        </StyledRatingContainer>
      );

    case "figure":
      return (
        <StyledRatingContainer className={className}>
          {showPopularity(rating, color)}
        </StyledRatingContainer>
      );

    default:
      return (
        <StyledRatingContainer>
          {showPopularity(rating, color)}
        </StyledRatingContainer>
      );
  }
};

export interface RatingProps {
  rating: number;
  className?: string;
  variant: "star" | "figure";
  color: string;
}

export default Rating;
