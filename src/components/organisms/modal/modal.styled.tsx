import styled from "styled-components";

export const StyledPlaceModalBackground = styled.div<{ active?: boolean }>`
  overflow: scroll;
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: all 0.5s ease-in;
`;

export const StyledPlaceModalContainer = styled.div`
  box-sizing: border-box;
  border-radius: 0px;
  box-shadow: ${({ theme }) => theme.shadow.blackShadow};
  position: absolute;
  background-color: white;
  width: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  padding-bottom: 2em;
  height: auto;
  max-width: 900px;
  overflow: scroll;

  & > button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  & > div::nth-of-type(2) {
    width: 90%;
    margin: 10px auto;
  }
  .modal {
    &__caption-rating {
      margin: 0 5px 0px 2px;
    }
    &__content {
      & > * {
        margin: 5px 0 15px 0px;
      }
    }
    &__close-btn {
      align-self: center;
    }
  }
`;

export const StyledPlaceMap = styled.div`
  border-radius: 5px;
  height: 300px;
  background-color: black;
  width: 100%;
  margin-top: 10px;
`;

export const StyledModalPhoto = styled.div<{ photo: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 1)),
    url(${({ photo }) => photo});
  background-position: center;
  background-repeat: no-repeat;
  min-height: 75%;
  display: grid;
  grid-template-areas:
    ". . ."
    "name name name"
    "rating type popularity";
  grid-template-rows: 1fr auto auto;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  border-top-left-radius: inherit;
  padding: 1em 0 2em 0;

  box-sizing: border-box;

  .modal-hero {
    &__heading {
      max-width: 290px;
      grid-area: name;
      letter-spacing: 1px;
      font-size: 3rem;
      color: whitesmoke;
      width: 100%;
      margin-bottom: 0.5em;
      line-height: 1.2;
    }
    &__rating {
      grid-area: rating;
    }
    &__pop-rating {
      grid-area: popularity;
    }
    &__type {
      grid-area: type;
      color: white;
      text-transform: lowercase;
    }
  }
`;

export const StyledOpening = styled.div`
  display: flex;
  flex-direction: column;

  color: black;
  svg {
    margin-right: 10px;
  }
`;
