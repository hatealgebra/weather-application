const themeDefault = {
  fonts: {
    mainFont: `"Poppins", sans-serif`,
    secondaryFont: `"Poppins", sans-serif`,
    logoFont: "Yellowtail, cursive",
  },
  // Base size 16px
  // Scale 1.200 - Major Third
  typography: {
    size: {
      h1: 39,
      h2: 33,
      h3: 27,
      h4: 23,
      h5: 17,
      body: 16,
      label: 12,
    },
    weight: {
      thin: 100,
      extra_light: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  color: {
    primary: "rgb(113, 97, 239)",
    secondary: "rgb(27, 13, 130)",
    tertiary: "#D7E1EA",
    label: "#797D89",
    border: " #E2E8F0",
    input: "#adb5bd",
    black: "#2D3748",
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
    mobile: "only screen and (max-width: 600px)",
    tablet: "only screen and (min-width: 600px)",
    landscapeTablet: "only screen and (min-width: 786px)",
    laptop: "only screen and (min-width: 992px)",
    desktopMedia: "only screen and (min-width: 1200px)",
  },
};

export default themeDefault;
