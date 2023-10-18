import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 115px 20px 0 20px;
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 115px 57px 0 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 4.817708333333333vw;
    padding: 5.989583333333333vw 2.96875vw 0 2.8645833333333335vw;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  width: 2058px;
  height: 1372px;
  right: -17px;
  top: -47px;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 107.1875vw;
    height: 71.45833333333333vw;
    right: -0.8854166666666666vw;
    top: -2.4479166666666665vw;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column-reverse;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    flex-direction: row;
    gap: 7.135416666666667vw;
  }
`;

export const BoxLineAndInstagramIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-top: 19px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding-top: 0.9895833333333334vw;
    gap: 2.6041666666666665vw;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 60px;
  background: ${({ theme }) => theme.colors.darkGray[300]};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 0.10416666666666667vw;
    height: 19.791666666666668vw;
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  height: 26px;
  width: 26px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    height: 1.3541666666666667vw;
    width: 1.3541666666666667vw;
  }
`;

export const IconInstagram = styled.img`
  height: 26px;
  width: 26px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    height: 1.3541666666666667vw;
    width: 1.3541666666666667vw;
  }
`;

export const BoxTextAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.5vw;
  }
`;

export const BoxTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.3020833333333333vw;
  }
`;

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.octonary};
  letter-spacing: -0.15px;
  font-style: italic;
  line-height: 25px;
  margin-left: 1px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    letter-spacing: -0.0078125vw;
    line-height: 1.3020833333333333vw;
    margin-left: 0.052083333333333336vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.text.octonary};
  letter-spacing: -1.15px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    max-width: 694px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    max-width: 36.145833333333336vw;
    font-size: ${({ theme }) => theme.fontSizesVW['5.1xl']};
    letter-spacing: -0.05989583333333333vw;
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      text-decoration-thickness: 0.052083333333333336vw;
    }

    &.white-color {
      color: ${({ theme }) => theme.colors.text.octonary};
    }
  }
`;

export const BoxTitleAndBoxGlassEffect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BoxGlassEffect = styled.div`
  position: relative;
  display: none;
  align-items: center;
  width: 511px;
  height: 98px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    display: flex;
    width: 26.614583333333332vw;
    height: 5.104166666666667vw;
    border-radius: 1.0416666666666667vw;
  }
`;

export const BoxGlassEffectMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 98px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    display: none;
  }
`;

export const BoxContentGlassEffect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 28px 0 40px;
  gap: 5px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0 1.4583333333333333vw 0 2.0833333333333335vw;
    gap: 0.2604166666666667vw;
    align-items: flex-end;
  }
`;

interface TypographyBoxGlassEffectProps {
  borderBottom?: boolean;
}

export const TypographyBoxGlassEffect = styled.p<TypographyBoxGlassEffectProps>`
  position: relative;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.xxs};
    text-align: right;
  }

  &:after {
    content: '';
    display: ${({ borderBottom }) => (borderBottom ? 'block' : 'none')};
    position: absolute;
    bottom: -2.5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.15;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      height: 0.052083333333333336vw;
      bottom: -0.13020833333333334vw;
    }
  }
`;

export const EmblemRigattiIcon = styled.img`
  position: absolute;
  right: -12px;
  width: 24.56px;
  height: 22.5px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    right: -0.625vw;
    width: 1.2791666666666666vw;
    height: 1.171875vw;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 26px;
  font-weight: 300;
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colors.text.octonary};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
    max-width: 643px;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    max-width: 33.489583333333336vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    line-height: 1.3541666666666667vw;
    letter-spacing: 0.005208333333333333vw;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-style: italic;
    font-weight: 500;
    letter-spacing: 0;
    letter-spacing: 0.1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      letter-spacing: 0.005208333333333333vw;
    }
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.5208333333333334vw;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 45.5px;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-wrap: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.5208333333333334vw;
    margin-top: 2.3697916666666665vw;
  }

  .card {
    width: 100%;
    height: inherit;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 12.5vw;
      height: 9.895833333333334vw;
      gap: 0.6770833333333334vw;
      padding: 0.8854166666666666vw 0.6770833333333334vw 1.0416666666666667vw 1.25vw;
      border-radius: 1.0416666666666667vw;
    }
  }

  .card-3 {
    margin-left: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-left: 0.052083333333333336vw;
    }
  }
`;

export const IconCard = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: -13px;
  right: 29px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    top: -0.6770833333333334vw;
    right: 1.5104166666666667vw;
    width: 1.25vw;
    height: 1.25vw;
  }

  &.icon-card-1 {
    right: 35px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      right: 1.8229166666666667vw;
    }
  }

  &.icon-card-2 {
    right: 33px;
    top: -12px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      right: 1.71875vw;
      top: -0.625vw;
    }
  }
`;

export const TitleCard = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.15px;
  color: ${({ theme }) => theme.colors.text.octonary};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 0.8333333333333334vw;
    letter-spacing: -0.0078125vw;
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &.title-card-1 {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      max-width: 6.614583333333333vw;
    }
  }

  &.title-card-2 {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      max-width: 9.427083333333334vw;
    }
  }

  &.title-card-3 {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      max-width: 6.770833333333333vw;
    }
  }
`;

export const DescriptionCard = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 300;
  line-height: 18px;
  letter-spacing: -0.15px;
  color: ${({ theme }) => theme.colors.text.octonary};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 0.9375vw;
    letter-spacing: -0.0078125vw;
    font-size: ${({ theme }) => theme.fontSizesVW.xs};
  }
`;
