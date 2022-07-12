import React, { Dispatch, useState } from "react";

import Button from "../../atoms/button/Button";
import genericPlace from "../../../assets/images/generic-place.jpg";

import { FaStar } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import {
  StyledCardContainer,
  StyledModalBtnContainer,
  StyledPlaceInfo,
  StyledPlacePhoto,
} from "./card.styled";
import Caption from "../../atoms/caption/Caption";

import { ADD_PLACE_DETAIL } from "../../../context/CityContext";
import { getPlaceDetail } from "../../../services/API/google";
import { FlexContainer } from "../../atoms/block/Block";

function Card({
  cityDispatch,
  setShowModal,
  place_id,
  photo,
  name,
  types,
  rating,
  vicinity,
}: CardProps) {
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  const loadModalData = async (place_id: string) => {
    setIsLoadingModal(true);
    try {
      const placeDetail = await getPlaceDetail(place_id);
      cityDispatch({
        type: ADD_PLACE_DETAIL,
        payload: { place_id: place_id, place_data: placeDetail },
      });
      setShowModal(placeDetail, true);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingModal(false);
    }
  };

  return (
    <StyledCardContainer data-testid="place-card">
      <StyledPlacePhoto
        src={photo ? photo : genericPlace}
        alt={`photo of ${name}`}
      />
      <StyledPlaceInfo>
        <h3 className="place__name">{name}</h3>
        <FlexContainer className="place__row">
          <div>
            <FaStar className="place__star-rating" fontSize="12px" />
            <Caption className="place__caption">{rating}</Caption>
          </div>
          <GoPrimitiveDot className="place__dot" />
          <Caption>{types && types.map((type) => `# ${type}`)}</Caption>
        </FlexContainer>
        <p>{vicinity}</p>
      </StyledPlaceInfo>
      <StyledModalBtnContainer>
        <Button
          appearance="primary"
          isLoading={isLoadingModal}
          onClick={() => loadModalData(place_id)}
        >
          Detail
        </Button>
      </StyledModalBtnContainer>
    </StyledCardContainer>
  );
}

export interface CardProps {
  place_id: string;
  name: string;
  photo: string;
  types: string[];
  rating: number;
  vicinity: string;
  setShowModal: (place_data: any, status: boolean) => void;
  cityDispatch: Dispatch<any>;
}

export default Card;
