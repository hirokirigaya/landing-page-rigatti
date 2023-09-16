import { theme } from './variables';

type Colors = typeof theme.colors;
type BreakPoints = typeof theme.breakPoints;
type FontSizes = typeof theme.fontSizes;
type CustomFontSizes = typeof theme.customFontSizes;
type CustomBreakPoints = typeof theme.customBreakPoints;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    breakPoints: BreakPoints;
    fontSizes: FontSizes;
    customFontSizes: CustomFontSizes;
    customBreakPoints: CustomBreakPoints;
  }
}
