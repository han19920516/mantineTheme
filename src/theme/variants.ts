import variable from "./variables";

export const variants = {
  burgerFont: {
    fontStyle: "italic",
    fontWeight: variable.fontWeightBold,
    fontFamily: variable.fontFamilyAdvanced,
  },
  button: {
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#D8D8D8",
    backgroundColorHover: "#fff",
    borderColorHover: "#000",
    hoverOpacity: "0.85",
    backgroundColorActive: "#666",
    borderColorActive: "#fff",
  },
  headerLogo: {
    color: variable.white,
    backgroundColor: variable.black,
  },
  signDevelopmentList: {
    color: variable.black,
    backgroundColor: variable.white,
  },
  heading: {
    fontFamily: variable.fontFamily.join(","),
    fontSize: variable.fontSizeBase,
    h1: {
      fontSize: variable.fontSizeH1,
      fontWeight: variable.fontWeightLight,
      lineHeight: "1.21428571",
    },
    h2: {
      fontSize: variable.fontSizeH2,
      fontWeight: variable.fontWeightLight,
      lineHeight: "1.21153846",
    },
    h3: {
      fontSize: variable.fontSizeH3,
      fontWeight: variable.fontWeightLight,
      lineHeight: "1.20833333",
    },
    h4: {
      fontSize: variable.fontSizeH4,
      fontWeight: variable.fontWeightBold,
      lineHeight: variable.lineHeightLarge,
    },
    h5: {
      fontSize: variable.fontSizeH5,
      fontWeight: variable.fontWeightBold,
      lineHeight: variable.lineHeightLarge,
    },
    h6: {
      fontSize: variable.fontSizeH6,
      fontWeight: variable.fontWeightBold,
      lineHeight: variable.lineHeightLarge,
    },
    body1: {
      fontSize: variable.fontSizeMedium,
      lineHeight: variable.lineHeightLarge,
    },
    body2: {
      fontSize: variable.fontSizeMedium,
      lineHeight: variable.lineHeightLarge,
    },
  },
  header: {
    navLinkColor: {
      backgroundColor: variable.grayMixBlendMode,
    },
    menu: {
      backgroundColor: variable.grey100,
      color: variable.black,
      addressColor: variable.grey800,
      linkLineColor: variable.grey400,
    },
  },
  footer: {
    titleColor: {
      color: variable.black,
    },
    textColor: {
      color: variable.grey800,
    },
    linksColor: {
      color: variable.black,
    },
    iconColor: {
      color: variable.black,
    },
    iconBgColor: {
      color: variable.white,
    },
    dividingLine: {
      color: variable.grey400,
    },
  },
  cookieBar: {
    backgroundColor: variable.grey800,
    color: variable.white,
    boxShadow: "0 -2px 4px rgba(0,0,0,0.12)",
  },
};

export const darkVariants = {
  burgerFont: {
    fontStyle: "italic",
    fontWeight: variable.fontWeightBold,
    fontFamily: variable.fontFamilyAdvanced,
  },
  button: {
    color: "#fff",
    backgroundColor: "#000",
    borderColor: "#3b3b3b",
    backgroundColorHover: "#000",
    borderColorHover: "#efefef",
    hoverOpacity: "0.85",
    backgroundColorActive: "#666",
    borderColorActive: "#efefef",
  },
  headerLogo: {
    color: variable.white,
    backgroundColor: variable.black,
  },
  signDevelopmentList: {
    color: variable.white,
    backgroundColor: variable.black,
  },
  link: {
    color: "#1E96FC",
    fontSize: variable.fontSizeLarge,
    lineHeight: variable.lineHeightMedium,
  },
  grey: {
    50: variable.grey50,
    100: variable.grey100,
    200: variable.grey200,
    300: variable.grey300,
    400: variable.grey400,
    500: variable.grey500,
    600: variable.grey600,
    700: variable.grey700,
    800: variable.grey800,
    900: variable.grey900,
    A100: variable.greyA100,
    A200: variable.greyA200,
    A400: variable.greyA400,
    A700: variable.greyA700,
    color: variable.white,
    backgroundColor: variable.black,
  },
  heading: {
    fontFamily: variable.fontFamily.join(","),
    fontSize: variable.fontSizeBase,
    h1: {
      fontSize: variable.fontSizeH1,
      fontWeight: variable.fontWeightLight,
      lineHeight: "1.21428571",
    },
    h2: {
      fontSize: variable.fontSizeH2,
      fontWeight: variable.fontWeightLight,
      lineHeight: "1.21153846",
    },
    h3: {
      fontSize: variable.fontSizeH3,
      fontWeight: variable.fontWeightLight,
      lineHeight: "1.20833333",
    },
    h4: {
      fontSize: variable.fontSizeH4,
      fontWeight: variable.fontWeightBold,
      lineHeight: variable.lineHeightLarge,
    },
    h5: {
      fontSize: variable.fontSizeH5,
      fontWeight: variable.fontWeightBold,
      lineHeight: variable.lineHeightLarge,
    },
    h6: {
      fontSize: variable.fontSizeH6,
      fontWeight: variable.fontWeightBold,
      lineHeight: variable.lineHeightLarge,
    },
    body1: {
      fontSize: variable.fontSizeMedium,
      lineHeight: variable.lineHeightLarge,
    },
    body2: {
      fontSize: variable.fontSizeMedium,
      lineHeight: variable.lineHeightLarge,
    },
  },
  header: {
    navLinkColor: {
      backgroundColor: variable.white,
    },
    menu: {
      backgroundColor: variable.grey900,
      color: variable.white,
      addressColor: variable.grey400,
      linkLineColor: variable.grey800,
    },
  },
  footer: {
    titleColor: {
      color: variable.white,
    },
    textColor: {
      color: variable.white,
    },
    linksColor: {
      color: variable.white,
    },
    iconColor: {
      color: variable.white,
    },
    iconBgColor: {
      color: variable.black,
    },
    dividingLine: {
      color: variable.grey800,
    },
  },
  cookieBar: {
    backgroundColor: variable.grey200,
    color: variable.black,
    boxShadow: "0 -2px 4px #000",
  },
};
