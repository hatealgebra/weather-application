import styled from "styled-components";

export const StyledCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  /* min-height: auto; */
  flex: 0 0 260px;
  padding-bottom: 10px;
  border-radius: 15px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
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
    }
    &__star-rating {
      color: ${({ theme }) => theme.color.primary};
      margin-right: 2px;
    }
    &__dot {
      color: ${({ theme }) => theme.color.primary};
      margin: 0 3px;
      height: 0.6em;
    }
    &__caption {
      text-transform: capitalize;
    }
  }
`;

export const StyledPlacePhoto = styled.img`
  cursor: pointer;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 220px;
`;

export const StyledPlaceInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 10px 10px 15px;
`;

export const StyledModalBtnContainer = styled.div`
  padding: 25px 0px 5px 0px;
  flex: 0;
  position: relative;
  bottom: 5px;
  margin: auto;
`;
