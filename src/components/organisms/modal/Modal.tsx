import React, { Dispatch, SetStateAction } from "react";

import {
  StyledModalPhoto,
  StyledOpening,
  StyledPlaceMap,
  StyledPlaceModalBackground,
  StyledPlaceModalContainer,
} from "./modal.styled";
import Button from "../../atoms/button/Button";
import Caption from "../../atoms/caption/Caption";
import Link from "../../atoms/link/Link";
import blueBackground from "../../../assets/images/blue-background.jpg";

import Rating from "../../atoms/rating/Rating";
import Review from "../../molecules/review/Review";
import { GrClose } from "react-icons/gr";
import { FlexContainer, Box } from "../../atoms/block/Block";

function Modal({ active, data, setShowModal }: ModalProps) {
  const {
    name,
    rating,
    rating_total,
    geometry,
    website,
    photos,
    formatted_address,
    opening_hours,
    reviews,
    vicinity,
  } = data;

  const closeModal = () => {
    setShowModal((prevState) => {
      const newState = { ...prevState, status: false };
      return Object.assign({}, newState);
    });
  };

  return (
    <StyledPlaceModalBackground data-testid="placeModal" active={active}>
      <StyledPlaceModalContainer>
        <Button
          className="modal__close-btb"
          onClick={() => closeModal()}
          appearance="tertiary"
          containsIcon
          size="small"
        >
          <GrClose />
        </Button>

        <StyledModalPhoto
          photo={
            (photos && photos.length > 0 && photos[1].getUrl) || blueBackground
          }
        >
          <h2 className="modal-hero__heading">{name}</h2>
          <Rating
            variant="star"
            className="modal-hero__rating"
            rating={rating}
          />
          <Rating
            color="white"
            variant="figure"
            className="modal-hero__pop-rating"
            rating={rating_total || 0}
          />
          <Caption className="modal-hero__website-link">
            <Link color="white" href={website || "#"}>
              Website
            </Link>
          </Caption>
        </StyledModalPhoto>
        <FlexContainer column className="modal__content" m="1em">
          <h4>Additional nfo</h4>
          <p>{vicinity || "-"}</p>
          <FlexContainer between>
            <Box>
              <h4>Opening hours</h4>
              <StyledOpening>
                {opening_hours &&
                  opening_hours.weekday_text.map((day) => <li>{day}</li>)}
                {!opening_hours && "No opening hours avalaible."}
              </StyledOpening>
            </Box>
          </FlexContainer>
          <Box>
            <h4>Direction</h4>
            <Caption>{formatted_address}</Caption>
            <StyledPlaceMap></StyledPlaceMap>
          </Box>
          <Box className="modal__reviews">
            <h4>Reviews</h4>
            {reviews?.map((review: IReviewComment, i: number) => (
              <Review
                key={i}
                photo={review.profile_photo_url}
                username={review.author_name}
                rating={review.rating}
                text={review.text}
                submitted={review.time}
              />
            )) || "No reviews sadly"}
          </Box>
          <Button
            className="modal__close-btn"
            appearance="primary"
            size="small"
            onClick={() => closeModal()}
          >
            close
          </Button>
        </FlexContainer>
      </StyledPlaceModalContainer>
    </StyledPlaceModalBackground>
  );
}

export interface ModalProps {
  active?: boolean;
  data: IPlaceDetailResponse;
  setShowModal: Dispatch<
    SetStateAction<{ place_data: IPlaceDetailResponse; status: boolean }>
  >;
}

export default Modal;

//  TODO write tests
