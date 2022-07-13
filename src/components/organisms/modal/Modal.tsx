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
import genericPlacePhoto from "../../../assets/images/generic-place.jpg";

import { ImClock } from "react-icons/im";

import Rating from "../../atoms/rating/Rating";
import Review from "../../molecules/review/Review";
import { GrClose } from "react-icons/gr";
import { FlexContainer, Box } from "../../atoms/block/Block";

function Modal({ active, variant, data, setShowModal }: ModalProps) {
  switch (variant) {
    case "place":
      const {
        name,
        rating,
        rating_total,
        geometry,
        types,
        website,
        photos,
        formatted_address,
        opening_hours,
        reviews,
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

            <StyledModalPhoto photo={photos[0].getUrl!() || genericPlacePhoto}>
              <h3 className="modal-hero__heading">{name}</h3>
              <Rating
                variant="star"
                className="modal-hero__rating"
                rating={rating}
              />
              <Rating
                color="white"
                variant="figure"
                className="modal-hero__pop-rating"
                rating={rating_total}
              />
              <Caption className="modal-hero__type">{types[0]}</Caption>
            </StyledModalPhoto>
            <FlexContainer column className="modal__content" m="1em">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias a sed ex dolore quasi velit enim repudiandae quo nisi
                ratione mollitia necessitatibus vitae beatae accusantium qui
                corrupti, ipsam ab laudantium?
              </p>
              <FlexContainer between>
                <Link>Website</Link>
                <StyledOpening>
                  <ImClock />
                  <p data-testid="test-opening"></p>
                </StyledOpening>
              </FlexContainer>
              <Box>
                <h4>Direction</h4>
                <Caption>{formatted_address}</Caption>
                <StyledPlaceMap></StyledPlaceMap>
              </Box>
              <Box>
                <h4>Reviews</h4>
                {reviews.map((review: IReviewComment, i: number) => (
                  <Review
                    key={i}
                    photo={review.profile_photo_url}
                    username={review.author_name}
                    rating={review.rating}
                    text={review.text}
                    submitted={review.time}
                  />
                ))}
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
    default:
      return null;
  }
}

export interface ModalProps {
  active?: boolean;
  variant: string;
  data: IPlaceDetailResponse;
  setShowModal: Dispatch<
    SetStateAction<{ place_data: IPlaceDetailResponse; status: boolean }>
  >;
}

export default Modal;
