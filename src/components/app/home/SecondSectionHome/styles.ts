import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 4.166666666666667vw;
  gap: 71px;
  margin-top: 181px;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    flex-direction: row;
    padding-left: 6.197916666666667vw;
    padding-right: 11.40625vw;
    gap: 3.6979166666666665vw;
    margin-top: 9.427083333333334vw;
    justify-content: space-between;
  }
`;

export const BoxLeft = styled.div`
  position: relative;
  display: flex;
  max-width: 804.66px;
  margin: 0 auto;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin: 0;
    max-width: initial;
    justify-content: inherit;
  }

  .logo {
    position: absolute;
    z-index: 5;
    top: -17.229166666666666vw;
    left: -5.1458333333333333vw;
    width: 31.458333333333334vw;
    height: 31.666666666666666vw;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      top: -12.229166666666666vw;
      left: -9.1458333333333333vw;
      width: 21.458333333333334vw;
      height: 21.666666666666666vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      top: -8.229166666666666vw;
      left: -1.1458333333333333vw;
      width: 11.458333333333334vw;
      height: 11.666666666666666vw;
    }
  }

  .womem-smiling-1 {
    background-size: cover;
    z-index: 3;
    background-position: 50% 100%;
    width: 35.84375vw;
    height: 58.1875vw;
    border-radius: 7.8125vw;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      width: 31.84375vw;
      height: 49.1875vw;
      border-radius: 7.8125vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      background-size: 144%;
      width: 19.427083333333332vw;
      height: 36.770833333333336vw;
      border-radius: 5.208333333333333vw;
      min-width: inherit;
    }
  }

  .child-smiling {
    z-index: 4;
    margin-top: auto;
    background-position: 30% 100%;
    width: 25.770833333333334vw;
    height: 37.145833333333332vw;
    margin-left: -8.1770833333333335vw;
    margin-bottom: -11.1875vw;
    border-radius: 5.125vw;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      width: 21.770833333333334vw;
      height: 31.145833333333332vw;
      margin-left: -8.1770833333333335vw;
      margin-bottom: -6.1875vw;
      border-radius: 5.125vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 11.770833333333334vw;
      height: 21.145833333333332vw;
      margin-left: -3.1770833333333335vw;
      margin-bottom: -2.1875vw;
      border-radius: 3.125vw;
      min-width: inherit;
    }
  }

  .womem-smiling-2 {
    z-index: 2;
    width: 36.989583333333334vw;
    height: 66.260416666666668vw;
    border-radius: 7.208333333333333vw;
    margin-left: -5.1770833333333335vw;
    margin-top: -13.78125vw;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      width: 23.989583333333334vw;
      height: 46.260416666666668vw;
      border-radius: 7.208333333333333vw;
      margin-left: -5.1770833333333335vw;
      margin-top: -9.78125vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 15.989583333333334vw;
      height: 30.260416666666668vw;
      border-radius: 5.208333333333333vw;
      margin-left: -3.1770833333333335vw;
      margin-top: -5.78125vw;
      min-width: inherit;
    }
  }
`;

export const StyledCircle = styled.div`
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.burntYellow[500]};
  z-index: 1;
  position: absolute;
  width: 26.09375vw;
  height: 26.09375vw;
  bottom: -9.78125vw;
  right: 16.6458333333333335vw;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 20.09375vw;
    height: 20.09375vw;
    bottom: -0.78125vw;
    right: 6.6458333333333335vw;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 16.09375vw;
    height: 16.09375vw;
    bottom: 0.78125vw;
    right: 3.6458333333333335vw;
  }
`;

export const Image = styled.img``;

interface IImageDiv {
  src: string;
}
export const ImageDiv = styled.div<IImageDiv>`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  padding-top: 50px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.03125vw;
    padding-top: 1.0416666666666667vw;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.text.quinary};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  line-height: 38px;
  font-weight: 400;
  letter-spacing: -1.25px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    max-width: 36.40625vw;
    line-height: 3.0208333333333335vw;
    letter-spacing: -0.06510416666666667vw;
    font-size: ${({ theme }) => theme.fontSizesVW['5xl']};
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.fontFamily.playfair};
    font-style: italic;
    text-decoration: underline;
    font-weight: 400;
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      text-decoration-thickness: 0.052083333333333336vw;
    }
  }
`;

export const BoxParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.5625vw;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 24px;
  letter-spacing: -0.35px;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    max-width: 37.239583333333336vw;
    line-height: 1.5625vw;
    letter-spacing: -0.018229166666666668vw;
  }
`;

export const SecondParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 24px;
  letter-spacing: -0.35px;
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    max-width: 37.239583333333336vw;
    line-height: 1.5625vw;
    letter-spacing: -0.018229166666666668vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }
`;

export const IconBookMark = styled.img`
  width: 17px;
  height: 21px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 0.8854166666666666vw;
    height: 1.09375vw;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.5208333333333334vw;
  }
`;
