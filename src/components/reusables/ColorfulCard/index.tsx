'use client';

import * as Styled from './styles';

interface IColorfulCard extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  background?: string;
  titleColor?: string;
  descriptionColor?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

const ColorfulCard = ({
  background,
  description,
  descriptionColor,
  title,
  titleColor,
  height,
  maxHeight,
  maxWidth,
  width,
  ...props
}: IColorfulCard): JSX.Element => {
  return (
    <Styled.Card
      background={background}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      width={width}
      {...props}
    >
      <Styled.Title color={titleColor}>{title}</Styled.Title>
      <Styled.Description color={descriptionColor}>{description}</Styled.Description>
    </Styled.Card>
  );
};

export default ColorfulCard;
