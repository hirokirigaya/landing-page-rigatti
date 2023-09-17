import styled from 'styled-components';

interface ICard {
  background?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

interface IText {
  color?: string;
}

export const Card = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  gap: 12px;
  background: ${({ background, theme }) => background || theme.colors.blue[50]};
  padding: 15px 14px 16px 12px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
`;


export const Title = styled.p<IText>`
  font-size: 1rem;
  line-height: 22px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  color: ${({ color, theme }) => color || theme.colors.gray[200]};
`;

export const Description = styled.p<IText>`
  font-size: 1rem;
  line-height: 18px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  color: ${({ color, theme }) => color || theme.colors.cementBlue[500]};
  letter-spacing: -0.25px;
`;
