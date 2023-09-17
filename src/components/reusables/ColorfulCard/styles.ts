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

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0.78125vw 0.7291666666666666vw 0.8333333333333334vw 0.625vw;
    gap: 0.625vw;
    border-radius: 0.8333333333333334vw;
  }
`;

export const Title = styled.p<IText>`
  line-height: 22px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  color: ${({ color, theme }) => color || theme.colors.gray[200]};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.1458333333333333vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }
`;

export const Description = styled.p<IText>`
  line-height: 18px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  color: ${({ color, theme }) => color || theme.colors.cementBlue[500]};
  letter-spacing: -0.25px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 0.9375vw;
    font-size: ${({ theme }) => theme.fontSizesVW.xs};
    letter-spacing: -0.013020833333333334vw;
  }
`;
