import React, { useContext, useState } from "react";

import CityContext from "../../../context/CityContext";

import { StyledPlacesContainer } from "../../organisms/appSection/appSectionStyled";
import Modal from "../../organisms/modal/Modal";
import Card from "../card/Card";

function PopularPlaces() {
  const { cityState, dispatchCityState } = useContext(CityContext);

  const [showModal, setShowModal] = useState({
    status: false,
  });

  return (
    <StyledPlacesContainer>
      {cityState.nearby_places
        .sort((a, b) => b.user_ratings_total - a.user_ratings_total)
        .map((place: any) => (
          <Card
            key={place.place_id}
            placeData={place}
            cityDispatch={dispatchCityState}
            setShowModal={setShowModal}
          />
        ))}
      {showModal.place_data && (
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
