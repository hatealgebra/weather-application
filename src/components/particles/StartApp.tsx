import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CityContext from "../../context/CityContext";
import { geolocationAPI } from "../../services/API/geolocation";

import { getCityFromCoords } from "../../helpers/helpers";
import HomePage from "../pages/homepage/Homepage";

const LoadingScreen = styled.div<{ isLoading: boolean }>`
  position: fixed;

  width: 100%;
  height: 100%;
  padding: 100px 0;
  background: #c9dbe9;
  background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
  background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  z-index: 2;
  transition: ease 2s;

  h1 {
    text-align: center;

    z-index: 3;
  }

  .cloud {
    position: relative;
    margin-top: 20%;
    width: 200px;
    height: 60px;
    background: #fff;
    border-radius: 200px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
  }

  .cloud:before,
  .cloud:after {
    content: "";
    position: absolute;
    background: #fff;
    width: 100px;
    height: 80px;
    position: absolute;
    top: -15px;
    left: 10px;

    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;

    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }

  .cloud:after {
    width: 120px;
    height: 120px;
    top: -55px;
    left: auto;
    right: 15px;
  }

  /*Time to animate*/
  .x1 {
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }

  /*variable speed, opacity, and position of clouds for realistic effect*/
  .x2 {
    left: 200px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6; /*opacity proportional to the size*/

    /*Speed will also be proportional to the size and opacity*/
    /*More the speed. Less the time in 's' = seconds*/
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }

  .x3 {
    left: -250px;
    top: -200px;

    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8; /*opacity proportional to the size*/

    -webkit-animation: moveclouds 10s linear infinite;
    -moz-animation: moveclouds 10s linear infinite;
    -o-animation: moveclouds 10s linear infinite;
  }

  .x4 {
    left: 470px;
    top: -250px;

    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75; /*opacity proportional to the size*/

    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }

  .x5 {
    left: -150px;
    top: -150px;

    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8; /*opacity proportional to the size*/

    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }

  @keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
`;

const StartApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { cityState, dispatchCityState } = useContext(CityContext);

  useEffect(() => {
    if (cityState === null) {
      loadCity();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadCity = async (): Promise<void> => {
    try {
      const response: any = await geolocationAPI();
      const { latitude, longitude } = response.coords;
      getCityFromCoords(latitude, longitude, dispatchCityState);
    } catch (e: any) {
      console.log(e);
      if (e.code === 1 || e.code === 2) {
        const latitude = 50.073658;
        const longitude = 14.4185;
        getCityFromCoords(latitude, longitude, dispatchCityState);
      }
    } finally {
      setTimeout(() => setIsLoading(false), 5000);
    }
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen isLoading={isLoading}>
          <h1>Loading...</h1>
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </LoadingScreen>
      )}
      {cityState && !isLoading && <HomePage />}
    </>
  );
};

export default StartApp;
