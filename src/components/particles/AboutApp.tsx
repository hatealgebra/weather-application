import React from "react";
import styled from "styled-components";

const AboutAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: auto;
  gap: 20px;
`;

const AboutApp = () => {
  return (
    <AboutAppContainer>
      <h2>About this app</h2>
      <div>
        <h3>Technology used</h3>
        <p>
          This app was built on top of create-react-app with typescript
          template. Components are rendered also in storybook and test with
          react-testing library. Styling is mainly done with styled-components.
        </p>
        <p>
          Data are fetched from Google Maps Place API, with some mock JSON
          inside the storybook stories.
        </p>
      </div>
      <div>
        <h3>How it functions</h3>
        <p>
          Application starts either with the weather from the location where
          device is located or defaultly shows Prague. Then user can search for
          the city through the input with autocomplete functionality. Then is
          the actual weather showed plus popular places.
        </p>
      </div>
    </AboutAppContainer>
  );
};

export default AboutApp;
