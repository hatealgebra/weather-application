import React, { useContext, useState } from "react";

import CityContext from "../../../context/CityContext";

import Modal from "../../organisms/modal/Modal";

import Card from "../card/Card";
import { StyledPlacesContainer } from "./popularPlaces.styled";

import blueBackground from "../../../assets/images/blue-background.jpg";

function PopularPlaces() {
  const { cityState, dispatchCityState } = useContext(CityContext);

  const [showModal, setShowModal] = useState({
    place_data: {} as IPlaceDetailResponse,
    status: false,
  });

  return (
    <StyledPlacesContainer>
      {cityState !== null &&
        cityState.nearby_places
          .sort((a, b) => b.user_ratings_total! - a.user_ratings_total!)
          .map((place) => (
            <Card
              key={place.place_id}
              place_id={place.place_id}
              name={place.name}
              types={place.types}
              rating={place.rating || 0}
              vicinity={place.vicinity || "unknown"}
              photo={(place.photos && place.photos[0].getUrl) || blueBackground}
              cityDispatch={dispatchCityState}
              setShowModal={setShowModal}
            />
          ))}
      {showModal.status && (
        <Modal
          data={showModal.place_data}
          active={showModal.status}
          setShowModal={setShowModal}
        />
      )}
    </StyledPlacesContainer>
  );
}

export default PopularPlaces;
