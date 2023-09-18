import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  margin-top: 120px;
  flex-direction: column-reverse;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    flex-direction: row;
    margin-top: 6.25vw;
  }
`;

export const Image = styled.img``;

export const BoxIntroductionOfSymptoms = styled.div`
  display: flex;
  align-items: center;
  padding: 52px 16px 370px 16px;
  background: ${({ theme }) => theme.colors.background.tertiary};
  position: relative;
  width: 100%;
  justify-content: center;
  max-width: 1246px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    border-radius: 0.8854166666666666vw;
    padding: 2.7083333333333335vw 10.46875vw 2.6041666666666665vw 0;
    max-width: 64.89583333333333vw;
    justify-content: flex-end;
  }

  .women-on-the-mountain {
    position: absolute;
    left: 0;
    bottom: 0;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 36.979166666666664vw;
      height: 29.21875vw;
    }
  }

  .logo {
    width: 245.42px;
    height: 249.29px;
    position: absolute;
    left: -34px;
    bottom: -120px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      bottom: -6.25vw;
      left: -1.7708333333333333vw;
      width: 12.782291666666667vw;
      height: 12.983854166666667vw;
    }
  }
`;

export const BoxContentIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.03125vw;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  color: ${({ theme }) => theme.colors.text.quinary};
  line-height: 58px;
  font-weight: 400;
  max-width: 528px;
  letter-spacing: -1px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['5xl']};
    line-height: 3.0208333333333335vw;
    max-width: 27.5vw;
    letter-spacing: -0.052083333333333336vw;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    letter-spacing: -1.1px;
    font-style: italic;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      letter-spacing: -0.05729166666666667vw;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 515px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    line-height: 1.5625vw;
    letter-spacing: -0.020833333333333332vw;
    max-width: 26.822916666666668vw;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 18px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.5208333333333334vw;
    margin-top: 0.9375vw;
  }
`;

export const BoxSymptoms = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0 20px 60px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 35.833333333333336vw;
    margin-left: -0.8333333333333334vw;
    padding: 0;
    padding-left: 7.34375vw;
  }
`;

export const ListSymptoms = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ItemSymptom = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.septenary};
  font-weight: 400;
  line-height: 40px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
    line-height: 2.0833333333333335vw;
  }

  &::before {
    content: '';
    position: absolute;
    left: -34px;
    width: 12.99px;
    height: 11.9px;
    background-image: url('/icons/rigatti_emblem_icon.svg');
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      left: -1.7708333333333333vw;
      width: 0.6765625vw;
      height: 0.6197916666666666vw;
    }
  }
`;
