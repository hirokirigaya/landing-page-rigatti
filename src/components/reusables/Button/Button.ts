import styled from 'styled-components';
import {
  AlignContentProps,
  AlignItemsProps,
  AlignSelfProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  ButtonStyleProps,
  ColorProps,
  FlexProps,
  GridProps,
  HeightProps,
  JustifyContentProps,
  JustifyItemsProps,
  JustifySelfProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  WidthProps,
  alignContent,
  alignItems,
  alignSelf,
  border,
  borderRadius,
  boxShadow,
  buttonStyle,
  color,
  flex,
  grid,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  layout,
  space,
  typography,
  width,
} from 'styled-system';

export type ButtonProps = ButtonStyleProps &
  FlexProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  AlignItemsProps &
  GridProps &
  WidthProps &
  HeightProps &
  AlignContentProps &
  JustifyContentProps &
  JustifyItemsProps &
  JustifySelfProps &
  BorderRadiusProps &
  BorderProps &
  BoxShadowProps &
  AlignSelfProps & {
    variant?: 'primary' | 'secondary';
  } & {
    fontFamily?: 'poppins' | 'playfair' | 'montserrat';
  };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme, fontFamily }) =>
    fontFamily
      ? theme.fontFamily[fontFamily as keyof typeof theme.fontFamily]
      : theme.fontFamily.playfair};

  ${typography}
  ${flex}
  ${space}
  ${color}
  ${layout}
  ${buttonStyle}
  ${alignItems}
  ${grid}
  ${width}
  ${height}
  ${alignContent}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${borderRadius}
  ${border}
  ${boxShadow}
  ${alignSelf}
`;

Button.defaultProps = {
  variant: 'primary',
};
