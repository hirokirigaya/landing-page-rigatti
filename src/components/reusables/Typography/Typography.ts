import styled from 'styled-components';
import {
  FlexProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  HeightProps,
  LayoutProps,
  LetterSpacingProps,
  LineHeightProps,
  MarginProps,
  PaddingProps,
  SpaceProps,
  TextAlignProps,
  VerticalAlignProps,
  WidthProps,
  flex,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  layout,
  letterSpacing,
  lineHeight,
  margin,
  padding,
  space,
  textAlign,
  typography,
  verticalAlign,
  width,
} from 'styled-system';

type ColorProps = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
type FontFamily = 'poppins' | 'playfair' | 'montserrat';

type TypographyProps = FlexProps &
  SpaceProps &
  LayoutProps &
  FontSizeProps &
  FontFamilyProps &
  FontStyleProps &
  FontWeightProps &
  TextAlignProps &
  VerticalAlignProps &
  LineHeightProps &
  LetterSpacingProps &
  PaddingProps &
  WidthProps &
  HeightProps &
  MarginProps & {
    color?: ColorProps;
  } & {
    fontFamily?: FontFamily;
  };

export const Typography = styled.p<TypographyProps>`
  color: ${({ color, theme }) =>
    color === 'primary'
      ? theme.colors.text.primary
      : color === 'secondary'
      ? theme.colors.text.secondary
      : color === 'tertiary'
      ? theme.colors.text.tertiary
      : color === 'quaternary'
      ? theme.colors.text.quaternary
      : color === 'quinary'
      ? theme.colors.text.quinary
      : color
      ? color
      : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ fontFamily }) =>
    fontFamily === 'poppins'
      ? 'var(--font-poppins), sans-serif'
      : fontFamily === 'playfair'
      ? 'var(--font-playfair), sans-serif'
      : fontFamily === 'montserrat'
      ? 'var(--font-montserrat), sans-serif'
      : 'var(--font-poppins)'};

  ${typography}
  ${flex}
	${space}
	${layout}
	${fontSize}
	${fontFamily}
	${fontStyle}
	${fontWeight}
	${textAlign}
	${verticalAlign}
	${lineHeight}
	${letterSpacing}
	${padding}
	${width}
	${height}
	${margin}
`;
