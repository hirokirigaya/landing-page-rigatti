import { theme } from './variables';

type Colors = typeof theme.colors;
type BreakPoints = typeof theme.breakPoints;
type FontSizes = typeof theme.fontSizes;
type FontSizesVW = typeof theme.fontSizesVW;
type CustomFontSizes = typeof theme.customFontSizes;
type CustomFontSizesVW = typeof theme.customFontSizesVW;
type CustomBreakPoints = typeof theme.customBreakPoints;
type FontFamily = typeof theme.fontFamily;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    breakPoints: BreakPoints;
    fontSizes: FontSizes;
    fontSizesVW: FontSizesVW;
    customFontSizes: CustomFontSizes;
    customFontSizesVW: CustomFontSizesVW;
    customBreakPoints: CustomBreakPoints;
    fontFamily: FontFamily;
  }
}
