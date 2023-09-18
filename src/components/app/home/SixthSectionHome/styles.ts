import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  gap: 14px;
  align-items: center;
  padding: 0 4.166666666666667vw;
  flex-direction: column-reverse;
  margin-top: 100px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0;
    flex-direction: row;
    margin-top: 0;
    padding-left: 3.90625vw;
    gap: 0.7291666666666666vw;
  }
`;

export const Image = styled.img`
  width: 100%;
  &.man-on-his-back {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 46.09375vw;
      height: 46.302083333333336vw;
    }
  }
`;

export const BoxContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.9791666666666667vw;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  color: ${({ theme }) => theme.colors.text.quinary};
  line-height: 38px;
  font-weight: 400;
  letter-spacing: -0.94px;
  max-width: 751px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['5xl']};
    line-height: 3.0208333333333335vw;
    letter-spacing: -0.04895833333333333vw;
    max-width: 39.114583333333336vw;
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
  max-width: 715px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    line-height: 1.5625vw;
    letter-spacing: -0.015625vw;
    max-width: 37.239583333333336vw;
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
