import React from "react";
import dateformat from "dateformat";

import Heading from "../../atoms/heading/Heading";
import {
  StyledModalPhoto,
  StyledOpening,
  StyledPlaceMap,
  StyledPlaceModalBackground,
  StyledPlaceModalContainer,
} from "./modal.styled";
import Button from "../../atoms/button/Button";
import { FlexContainer, Box, ButtonRow } from "../../atoms/blocks/Containers";
import Caption from "../../atoms/caption/Caption";
import Link from "../../atoms/link/Link";
import genericPlacePhoto from "../../../assets/images/generic-place.jpg";

import { ImClock } from "react-icons/im";
import { transformType } from "../../../utils/commonUtils/commonUtils";
import Rating from "../../atoms/rating/Rating";
import Review, { ReviewProps } from "../../molecules/review/Review";
import { GrClose } from "react-icons/gr";

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

      return (
        <StyledPlaceModalBackground data-testid="placeModal" active={active}>
          <StyledPlaceModalContainer>
            <Button
              className="modal__close-btb"
              onClick={() => setShowModal(false)}
              appearance="tertiary"
              containsIcon
              size="small"
            >
              <GrClose />
            </Button>

            <StyledModalPhoto photo={photos[0]?.getUrl || genericPlacePhoto}>
              <Heading className="modal-hero__heading" level={3}>
                {name}
              </Heading>
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
                <StyledOpening between>
                  <ImClock />
                  <p data-testid="test-opening"></p>
                </StyledOpening>
              </FlexContainer>
              <Box>
                <Heading level={4}>Direction</Heading>
                <Caption>{formatted_address}</Caption>
                <StyledPlaceMap></StyledPlaceMap>
              </Box>
              <Box>
                <Heading level={4}>Reviews</Heading>
                {reviews.map((review: ReviewProps, i: number) => (
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
                withIcon
                size="small"
                onClick={() => setShowModal(false)}
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
  data: object | [];
  seShowModal: () => void;
}

export default Modal;
