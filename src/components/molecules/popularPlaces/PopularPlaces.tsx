import React, { useContext, useState } from "react";

import CityContext from "../../../context/CityContext";

import Modal from "../../organisms/modal/Modal";
import Card from "../card/Card";
import { StyledPlacesContainer } from "./popularPlaces.styled";

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
          .sort((a, b) => b.rating_total - a.rating_total)
          .map((place: IPlaceDetailResponse) => (
            <Card
              key={place.place_id}
              place_id={place.place_id}
              name={place.name}
              types={place.types}
              rating={place.rating}
              vicinity={place.vicinity || "unknown"}
              photo={place.photos[0].getUrl!()}
              cityDispatch={dispatchCityState}
              setShowModal={setShowModal}
            />
          ))}
      {showModal && (
        <Modal
          variant="place"
          data={showModal.place_data}
          active={showModal.status}
          setShowModal={setShowModal}
        />
      )}
    </StyledPlacesContainer>
  );
}

export default PopularPlaces;
