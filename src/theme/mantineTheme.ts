import { MantineThemeOverride, MantineProvider } from '@mantine/core';
import variable from "./variables";

const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: "blue",
  colors: {
    // override default blue colors
    blue: [
      "#E7F5FF",
      "#D0EBFF",
      "#A5D8FF",
      "#74C0FC",
      "#4DABF7",
      "#339AF0",
      "#228BE6",
      "#1E96FC",
      "#1971C2",
      "#1864AB",
    ],
    custom: [
      "#111110",
      "#111111",
      "#111112",
      "#111113",
      "#111114",
      "#111115",
      "#111116",
      "#111117",
      "#111118",
      "#111119",
    ],
  },
  headings: {
    fontFamily: variable.fontFamilyAdvanced,
    fontWeight: variable.fontWeightLight,
    sizes: {
      h1: {
        fontSize: variable.fontSizeH1,
        lineHeight: "1.21428571",
      },
      h2: {
        fontSize: variable.fontSizeH2,
        lineHeight: "1.21153846",
      },
      h3: {
        fontSize: variable.fontSizeH3,
        lineHeight: "1.20833333",
      },
      h4: {
        fontSize: variable.fontSizeH4,
        lineHeight: variable.lineHeightLarge,
      },
      h5: {
        fontSize: variable.fontSizeH5,
        lineHeight: variable.lineHeightLarge,
      },
      h6: {
        fontSize: variable.fontSizeH6,
        lineHeight: variable.lineHeightLarge,
      },
    },
  },
  fontFamily: variable.fontFamily,
  breakpoints: {
    xs: 320,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  other: {
    fontFamilyAdvanced: variable.fontFamilyAdvanced,
    palette: {
      black: "#000",
      white: variable.white,
      // white: '#fff',
      themePrimary: "#1E96FC",
      themeLighterAlt: "#f6fbff",
      themeLighter: "#dbeeff",
      themeLight: "#bbdffe",
      themeTertiary: "#78bffd",
      themeSecondary: "#E91E63",
      themeDarkAlt: "#1b86e3",
      themeDark: "#1771c0",
      themeDarker: "#11538d",
      neutralLighterAlt: "#1e1e1e",
      neutralLighter: "#1d1d1d",
      neutralLight: "#1c1c1c",
      neutralQuaternaryAlt: "#1a1a1a",
      neutralQuaternary: "#f4f4f4",
      neutralTertiaryAlt: "#181818",
      neutralTertiary: "#c8c8c8",
      neutralSecondary: "#d0d0d0",
      neutralPrimaryAlt: "#dadada",
      neutralPrimary: "#FFFFFF",
      neutralDark: "#f4f4f4",
    },
  },
};

export default mantineTheme;