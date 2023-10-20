import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 85px;
  width: 100%;
  align-items: center;
  margin-top: 200px;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 0 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 4.427083333333333vw;
    margin-top: 10.416666666666666vw;
    padding: 0 13.90625vw;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 50px;
  letter-spacing: -0.9px;
  color: ${({ theme }) => theme.colors.text.nonary};
  font-weight: 400;
  text-align: center;
  margin-right: -16px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    line-height: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 58.28125vw;
    margin-right: -0.8333333333333334vw;
    letter-spacing: -0.046875vw;
    line-height: 3.6458333333333335vw;
    font-size: ${({ theme }) => theme.fontSizesVW['5xl']};
  }
  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const BoxPlans = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 4.166666666666667vw;
    flex-direction: row;
  }
`;

export const BoxPlan = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 2px solid #c3b48b;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 20.833333333333332vw;
    border: 0;
    padding-bottom: 0;
  }
`;

export const TitlePlan = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  line-height: 36px;
  letter-spacing: -0.6px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.nonary};
  margin-bottom: 13px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    line-height: 46px;
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin-bottom: 0.6770833333333334vw;
    line-height: 2.3958333333333335vw;
    letter-spacing: -0.03125vw;
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
  }

  &.brown {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ContentPlan = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #c3b48b30;
  border-bottom: 2px solid #c3b48b30;
  padding: 21px 0 20px 0;
  min-height: 280px;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    border-top: 0.10416666666666667vw solid #c3b48b30;
    border-bottom: 0.10416666666666667vw solid #c3b48b30;
    padding: 1.09375vw 0 1.0416666666666667vw 0;
    height: 15.989583333333334vw;
    min-height: inherit;
  }
`;

export const DescriptionPlan = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    line-height: 1.3541666666666667vw;
  }

  &.white {
    color: ${({ theme }) => theme.colors.default.white};
  }
  &.diamond {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 22.1875vw;
    }
  }

  &.silver {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 18.75vw;
    }
  }

  &.gold {
    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 20vw;
    }
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    align-items: flex-start;
  }
`;

export const Installments = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 46px;
  letter-spacing: -1.2px;
  color: ${({ theme }) => theme.colors.default.white};
  opacity: 0.3;
  margin-bottom: -1px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin-bottom: -0.052083333333333336vw;
    letter-spacing: -0.0625vw;
    line-height: 2.3958333333333335vw;
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
  }
`;

export const BoxPrice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.10416666666666667vw;
  }
  span {
    color: ${({ theme }) => theme.colors.default.white};
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 26px;
    opacity: 0.5;
    padding-top: 5px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      padding-top: 0.2604166666666667vw;
      line-height: 1.3541666666666667vw;
      font-size: ${({ theme }) => theme.fontSizesVW.md};
    }
  }
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.colors.default.white};
  font-size: 58px;
  line-height: 56px;
  letter-spacing: -2.2px;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: 3.0208333333333335vw;
    line-height: 2.9166666666666665vw;
    letter-spacing: -0.11458333333333334vw;
  }
`;

export const DescriptionPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.default.white};
  opacity: 0.5;
  margin-top: 11px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin-top: 0.5729166666666666vw;
    line-height: 1.3541666666666667vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }
`;

export const ListOfBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin-top: 1.09375vw;
  }
`;

export const Benefit = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.default.white};
  line-height: 20px;
  letter-spacing: -0.047px;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 26px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.3541666666666667vw;
    letter-spacing: -0.002447916666666667vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }

  &.brown {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 500;
    letter-spacing: -0.06px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      letter-spacing: -0.003125vw;
    }
  }

  &.green {
    color: ${({ theme }) => theme.colors.green[100]};
    text-decoration: underline;
    font-weight: 500;
  }
`;
