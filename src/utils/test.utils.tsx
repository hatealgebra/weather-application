import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/particles/Themes";
import { CityProviderMock } from "../context/CityContext";

const ThemeProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
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
