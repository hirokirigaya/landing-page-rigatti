import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 4.166666666666667vw;
  margin-top: 53px;
  align-items: center;
  margin-bottom: 90px;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0 4.635416666666667vw 0 5.208333333333333vw;
    margin-top: 2.7604166666666665vw;
    margin-bottom: 4.6875vw;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.03125vw;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  color: ${({ theme }) => theme.colors.text.quinary};
  line-height: 38px;
  font-weight: 400;
  letter-spacing: -0.94px;
  max-width: 665px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['5xl']};
    line-height: 3.0208333333333335vw;
    letter-spacing: -0.04895833333333333vw;
    max-width: 34.635416666666664vw;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    letter-spacing: -0.94px;
    font-style: italic;
    text-decoration: underline;
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      letter-spacing: -0.04895833333333333vw;
      text-decoration-thickness: 0.052083333333333336vw;
    }
  }

  br {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      display: block;
    }
  }
`;

export const BoxParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.5625vw;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.3px;
  max-width: 668px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    line-height: 1.5625vw;
    letter-spacing: -0.015625vw;
    max-width: 34.791666666666664vw;
  }
`;

export const BoxRight = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  position: relative;
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin-top: 0.5208333333333334vw;
    gap: 0.78125vw;
  }

  .logo-rigatti {
    position: absolute;
    top: -106px;
    left: -144px;
    z-index: -1;
    width: 268.58px;
    height: 272.82px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      top: -5.520833333333333vw;
      left: -7.5vw;
      width: 13.988541666666666vw;
      height: 14.209375vw;
    }
  }

  .balneario-camboriu {
    border-radius: 16px;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.12);

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      border-radius: 0.8333333333333334vw;
    }

    &.beach-1 {
      width: 26.760416666666668vw;
      height: 43.44791666666667vw;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        width: 17.760416666666668vw;
        height: 27.447916666666668vw;
      }
    }

    &.beach-2 {
      width: 23.15625vw;
      height: 30.239583333333336vw;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        width: 10.15625vw;
        height: 12.239583333333334vw;
      }
    }

    &.beach-3 {
      width: 23.15625vw;
      height: 40.23958333333333vw;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        width: 10.15625vw;
        height: 17.239583333333332vw;
      }
    }

    &.beach-4 {
      width: 26.760416666666668vw;
      height: 43.44791666666667vw;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        width: 14.6875vw;
        height: 27.447916666666668vw;
      }
    }
  }
`;

export const Image = styled.img``;

export const BoxDoubleImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.78125vw;
  }
`;
