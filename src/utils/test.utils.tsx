import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import themeDefault from "../components/particles/themeDefault";
import { CityProviderMock } from "../context/CityContext";

const ThemeProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>;
};

const setupTest = (component: ReactElement) => {
  return render(<ThemeProviderComponent>{component}</ThemeProviderComponent>);
};

export const setupTestCity = (component: ReactElement) => {
  return render(
    <ThemeProviderComponent>
      <CityProviderMock>{component}</CityProviderMock>
    </ThemeProviderComponent>
  );
};

export default setupTest;
