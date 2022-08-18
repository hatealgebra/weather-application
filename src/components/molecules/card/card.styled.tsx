import styled from "styled-components";

export const StyledCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  /* min-height: auto; */
  flex: 0 0 270px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  .place {
    &__name {
      font-weight: 600;
      width: 100%;
    }
    &__row {
      display: flex;
      align-items: center;
      margin: 3px 0;
      align-items: flex-start;
      gap: 5px;
    }
    &__star-rating {
      color: ${({ theme }) => theme.color.primary};
      margin: 0 2px 0 5px;
    }
    &__dot {
      color: ${({ theme }) => theme.color.primary};
      margin: 0 3px;
      height: 0.6em;
    }
    &__types {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    &__caption {
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.typography.size.h5};
      align-self: center;
      position: relative;
      bottom: 2px;
    }
    &__description {
      margin-top: 10px;
      font-style: italic;
    }
  }
`;

export const StyledPlacePhoto = styled.img`
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 220px;
`;

export const StyledPlaceInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px 10px 15px;
`;

export const StyledModalBtnContainer = styled.div`
  padding: 25px 0px 5px 0px;
  flex: 0;
  position: relative;
  bottom: 5px;
  margin: auto;
`;
