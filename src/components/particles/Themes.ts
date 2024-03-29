const themeDefault = {
  name: "DEFAULT",
  fonts: {
    mainFont: `"Poppins", sans-serif`,
    secondaryFont: `"Poppins", sans-serif`,
    logoFont: "Yellowtail, cursive",
  },
  // Base size 16px
  // Scale 1.200 - Major Third
  typography: {
    size: {
      h1: "3.2rem",
      h2: "2.974rem",
      h3: "1.728rem",
      h4: "1.44rem",
      h5: "1.2rem",
      body: "1rem",
      label: "0.833rem",
    },
    weight: {
      thin: 100,
      extra_light: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
  color: {
    primary: "rgb(113, 97, 239)",
    secondary: "rgb(27, 13, 130)",
    tertiary: "#D7E1EA",
    label: "#797D89",
    border: " #E2E8F0",
    input: "#adb5bd",
    body: "white",
    text: "#2D3748",
    positive: "#53BE62",
    warning: "#D7263D",
    orange: "#ff8811",
    vividSky: "#4CC9FO",
  },
  shadow: {
    search_shadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    border_shadow: "0 0px 1px 0px rgba(0,0,0,.4)",
    big_shadow: "0px 5px 15px 3px rgba(0, 0, 0, .25)",
  },
  breakpoint: {
    mobile: "@media only screen and (max-width: 600px)",
    tablet: "@media only screen and (min-width: 600px)",
    landscapeTablet: "@media only screen and (min-width: 786px)",
    laptop: "@media only screen and (min-width: 992px)",
    desktopMedia: "@media only screen and (min-width: 1200px)",
  },
};

export const darkTheme = {
  ...themeDefault,
  name: "DARK",
  color: {
    ...themeDefault.color,
    body: themeDefault.color.text,
    text: themeDefault.color.body,
    label: themeDefault.color.border,
    border: themeDefault.color.label,
  },
  // shadow: {
  //   search_shadow: "0 1px 2px 0 rgba(255, 255, 255, 0.06)",
  //   border_shadow: "0 0px 1px 0px rgba(255,255,255,.4)",
  //   big_shadow: "0px 5px 15px 3px rgba(255, 255, 255, .25)",
  // },
};

export default themeDefault;
