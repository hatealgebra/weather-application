import { ThemeProvider } from "styled-components";
import themeDefault, { darkTheme } from "../src/components/particles/Themes";
import GlobalStyles from "../src/components/particles/globalStyles";
import { addDecorator } from "@storybook/react";

import { MsgProvider } from "../src/context/MsgContext";
import { CityProviderMock } from "../src/context/CityContext";
import { MyCitiesProviderMock } from "../src/context/MyCitiesContext";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { OWHandler } from "../src/mocks/handlers";

const StorybookGlobalWrapper = (storyFn) => (
  <MsgProvider>
    <CityProviderMock>
      <MyCitiesProviderMock>
        <GlobalStyles />
        {storyFn()}
      </MyCitiesProviderMock>
    </CityProviderMock>
  </MsgProvider>
);

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
const themes = [themeDefault, darkTheme];
addDecorator(mswDecorator);
addDecorator(StorybookGlobalWrapper);
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      openWeatherMap: OWHandler,
    },
  },
};
