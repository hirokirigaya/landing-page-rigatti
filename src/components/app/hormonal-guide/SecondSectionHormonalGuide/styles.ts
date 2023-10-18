import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  gap: 40px;

  padding: 0 20px 0 20px;
  margin-top: 140px;
  flex-direction: column-reverse;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 0 55px 0 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    flex-direction: row;
    gap: 8.671875vw;
    padding: 0 7.96875vw 0 4.84375vw;
    margin-top: 13.406249999999998vw;
  }
`;

export const RigattiEmblem = styled.img`
  position: absolute;
  right: -245px;
  bottom: 0;
  width: 456.37px;
  height: 418.08px;
  z-index: -3;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 23.769270833333334vw;
    height: 21.775vw;
    right: -12.760416666666666vw;
    z-index: 0;
  }
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 130px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.5vw;
    margin-bottom: 6.770833333333333vw;
  }
`;

export const BoxSubtitleAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.2604166666666667vw;
  }
`;

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 25px;
  font-weight: 400;
  letter-spacing: -0.075px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    letter-spacing: -0.00390625vw;
    line-height: 1.3020833333333333vw;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.nonary};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 400;
  letter-spacing: -1.1px;
  line-height: 62px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    text-align: left;
    max-width: 836px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['5.1xl']};
    max-width: 43.541666666666664vw;
    letter-spacing: -0.05729166666666667vw;
    line-height: 3.2291666666666665vw;
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      text-decoration-thickness: 0.052083333333333336vw;
    }
  }
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 683px;
  margin-top: 5px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
    max-width: 683px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.3541666666666667vw;
    max-width: 35.572916666666664vw;
    margin-top: 0.2604166666666667vw;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.default.white};
  line-height: 26px;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.3541666666666667vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }

  &.brown {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 600;
    font-style: italic;
  }
`;

export const BoxDiamondIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: -1px;
  margin-left: -2px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.8854166666666666vw;
    margin-top: -0.052083333333333336vw;
    margin-left: -0.10416666666666667vw;
    justify-content: flex-start;
  }
`;

export const DiamondIcon = styled.img`
  width: 139px;
  height: 155px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 7.239583333333333vw;
    height: 8.072916666666666vw;
  }
`;

export const BoxLeft = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  justify-content: center;
  padding-bottom: 46px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding-bottom: 2.3958333333333335vw;
  }
`;

export const DoctorRigattiCircularLogo = styled.img`
  position: absolute;
  top: -145px;
  left: -38px;
  width: 156.18px;
  height: 160.69px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    top: -7.552083333333333vw;
    left: -1.9791666666666667vw;
    width: 8.134375vw;
    height: 8.369270833333333vw;
  }
`;

export const BoxGlassEffect = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  background: rgba(26, 26, 26, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: inset 0 10px 20px -14px rgba(255, 255, 255, 0.3);

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    border-radius: 1.0416666666666667vw;
    width: 34.739583333333336vw;
    height: 8.28125vw;
    box-shadow: inset 0 0.5208333333333334vw 1.0416666666666667vw -0.7291666666666666vw rgba(255, 255, 255, 0.3);
  }
`;

export const ContentBoxGlassEffect = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 27px 35px 28px;
  box-shadow: 0 20px 300px -20px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  gap: 13px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 1.875vw 1.40625vw 1.8229166666666667vw 1.4583333333333333vw;
    box-shadow: 0 1.0416666666666667vw 15.625vw -1.0416666666666667vw rgba(255, 255, 255, 0.1);
    border-radius: 1.0416666666666667vw;
    gap: 0.6770833333333334vw;
  }
`;

export const DescriptionBoxGlassEffect = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.default.white};
  font-style: italic;
  line-height: 28px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.4583333333333333vw;
    font-size: ${({ theme }) => theme.fontSizesVW.lg};
  }
`;

export const AuthorBoxGlassEffect = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.nonary};
  line-height: 26px;
  opacity: 0.4;
  text-align: center;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.xs};
    line-height: 1.3541666666666667vw;
  }
`;

export const Quotes = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: 200px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 900;
  position: absolute;
  top: 23px;
  line-height: 0;
  user-select: none;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    top: 1.1979166666666667vw;
    font-size: 10.416666666666666vw;
  }
`;

export const FatherWithChildren = styled.img`
  position: absolute;
  bottom: 32px;
  left: -194px;
  width: 1137px;
  height: 1004px;
  opacity: 0.5;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    bottom: 1.6666666666666667vw;
    left: -10.104166666666666vw;
    width: 59.21875vw;
    height: 52.291666666666664vw;
    opacity: 1;
    z-index: 0;
  }
`;
