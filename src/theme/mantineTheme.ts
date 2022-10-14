import { MantineThemeOverride, MantineProvider } from '@mantine/core';
import variable from "./variables";

const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: variable.primaryColor,
  headings: {
    fontFamily: variable.fontFamily,
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
  fontSizes: {
    xs: variable.fontSizeXs,
    sm: variable.fontSizeSm,
    md: variable.fontSizeMd,
    lg: variable.fontSizeLg,
    xl: variable.fontSizeXl,
  },
  spacing: {
    xs: variable.spacingXs,
    sm: variable.spacingSm,
    md: variable.spacingMd,
    lg: variable.spacingLg,
    xl: variable.spacingXl,
  },
  breakpoints: {
    xs: variable.breakpointXs,
    sm: variable.breakpointSm,
    md: variable.breakpointMd,
    lg: variable.breakpointLg,
    xl: variable.breakpointXl,
  },
};

export default mantineTheme;