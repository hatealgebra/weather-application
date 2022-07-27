import { ThemeProvider } from "styled-components";
import theme from "../src/components/particles/themeDefault";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "../src/components/particles/globalStyles";

import { MsgProvider } from "../src/context/MsgContext";
import { CityProviderMock } from "../src/context/CityContext";
import { MyCitiesProviderMock } from "../src/context/MyCitiesContext";

const StorybookGlobalWrapper = (storyFn) => (
  <ThemeProvider theme={theme}>
    <MsgProvider>
      <CityProviderMock>
        <MyCitiesProviderMock>
          <GlobalStyles />
          {storyFn()}
        </MyCitiesProviderMock>
      </CityProviderMock>
    </MsgProvider>
  </ThemeProvider>
);

addDecorator(StorybookGlobalWrapper);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
