import React, { Dispatch, SetStateAction, useState } from "react";

import Button from "../../atoms/button/Button";

import { FaStar } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import {
  StyledCardContainer,
  StyledModalBtnContainer,
  StyledPlaceInfo,
  StyledPlacePhoto,
} from "./card.styled";
import Caption from "../../atoms/caption/Caption";

import {
  ADD_PLACE_DETAIL,
  ICityReducerAction,
} from "../../../context/CityContext";
import { getPlaceDetail } from "../../../services/API/google";
import { FlexContainer } from "../../atoms/block/Block";
import { changeGetUrlPlace } from "../../../utils/city.utils";

// fixme card design
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
      const updatedPlace = changeGetUrlPlace(placeDetail);
      cityDispatch({
        type: ADD_PLACE_DETAIL,
        payload: {
          place_id: place_id,
          place_data: updatedPlace,
        },
      });
      setShowModal({ place_data: updatedPlace, status: true });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingModal(false);
    }
  };

  return (
    <StyledCardContainer data-testid="place-card">
      <StyledPlacePhoto src={photo} alt={`photo of ${name}`} />
      <StyledPlaceInfo>
        <h3 className="place__name">{name}</h3>
        <FlexContainer style={{ gap: "1px" }}>
          <FaStar className="place__star-rating" fontSize="15px" />
          <Caption className="place__caption">{rating}</Caption>
        </FlexContainer>
        <Caption className="place__types">
          {types &&
            types.map((type) => (
              <div key={type}>
                <GoPrimitiveDot className="place__dot" />
                {type.replaceAll("_", " ")}
              </div>
            ))}
        </Caption>
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
  setShowModal: Dispatch<
    SetStateAction<{ place_data: IPlaceDetailResponse; status: boolean }>
  >;
  cityDispatch: Dispatch<ICityReducerAction>;
}

export default Card;
