import styled from "styled-components";

// FIXME: Gap between text and other components seems too big

export const StyledPlaceReview = styled.li`
  display: grid;
  grid-template-areas: "photo username username username" "photo rating date ." "text text text text ";
  grid-template-columns: auto auto auto 1fr;
  width: 100%;
  max-width: 500px;
  margin: 35px 0px;
  justify-items: flex-start;
  align-items: center;

  .place-review {
    &__img {
      grid-area: photo;
      margin-right: 10px;
    }
    &__author-name {
      grid-area: username;
      align-self: flex-end;
      text-transform: capitalize;
    }
    &__rating {
      margin-right: 4px;
      grid-area: rating;
      width: fit-content;
    }
    &__date {
      grid-area: date;
      align-self: center;
    }
    &__text {
      padding: 15px 10px 0px 5px;
      grid-area: text;
    }
  }
`;
