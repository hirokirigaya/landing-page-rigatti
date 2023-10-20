import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 116.5px;
  margin-top: 78px;
  margin-bottom: 116px;
  align-items: center;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 0 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding-left: 0.5208333333333334vw;
    gap: 6.067708333333333vw;
    margin-top: 4.0625vw;
    margin-bottom: 6.041666666666667vw;
  }
`;

export const BoxTitleAndButtons = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.875vw;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  line-height: 42px;
  letter-spacing: -0.7px;
  color: ${({ theme }) => theme.colors.text.nonary};
  font-weight: 400;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    line-height: 58px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 3.0208333333333335vw;
    letter-spacing: -0.036458333333333336vw;
    width: 54.635416666666664vw;
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
  }
  
  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: inherit;
    gap: 1.0416666666666667vw;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 482.21px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 25.115104166666665vw;
    height: 4.405208333333333vw;
    max-width: inherit;
  }
`;
