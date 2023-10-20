import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 114px;
  padding: 0 20px;
  margin-top: 195.5px;
  position: relative;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 0 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 5.9375vw;
    padding: 0 9.375vw 0 7.8125vw;
    margin-top: 10.182291666666666vw;
    flex-direction: row;
  }
`;

export const ManReadingBookImage = styled.img`
  position: absolute;
  left: 0;
  top: -780px;
  width: 562.53px;
  height: 924.28px;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    top: -40.625vw;
    width: 29.2984375vw;
    height: 48.139583333333334vw;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.6041666666666665vw;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 46px;
  letter-spacing: -0.7px;
  color: ${({ theme }) => theme.colors.text.nonary};
  font-weight: 400;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
    line-height: 2.3958333333333335vw;
    letter-spacing: -0.036458333333333336vw;
    width: 32.96875vw;
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
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.4166666666666667vw;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 24px;
  letter-spacing: -0.275px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
    line-height: 1.25vw;
    letter-spacing: -0.014322916666666668vw;
    width: 31.666666666666668vw;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.default.white};
  line-height: 24px;
  position: relative;
  padding: 16px 0;
  padding-left: 26px;
  letter-spacing: 0.04px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
    line-height: 1.25vw;
    width: 31.614583333333332vw;
    padding: 0.8333333333333334vw 0;
    padding-left: 1.3541666666666667vw;
    letter-spacing: 0.0020833333333333333vw;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.default.white};
    opacity: 0.2;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      height: 0.052083333333333336vw;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 13px;
    height: 12px;
    background-image: url(/icons/rigatti_emblem_icon.svg);

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 0.6770833333333334vw;
      height: 0.625vw;
    }
  }

  &:nth-child(1) {
    padding-top: 18px;
    padding-bottom: 18px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      padding-top: 0.9375vw;
      padding-bottom: 0.9375vw;
    }
  }

  &:nth-child(2) {
    padding-top: 12px;
    padding-bottom: 14px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      padding-top: 0.625vw;
      padding-bottom: 0.7291666666666666vw;
    }
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;

    &::before {
      display: none;
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

export const RightSide = styled.div`
  position: relative;
  width: 100%;
`;

export const DoctorRigattiLogoCircular = styled.img`
  position: absolute;
  width: 147.33px;
  height: 151.58px;
  top: -74px;
  right: -74px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 7.673437500000001vw;
    height: 7.894791666666667vw;
    top: -3.8541666666666665vw;
    right: -3.8541666666666665vw;
  }
`;

export const Video = styled.video`
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background.secondary};
  width: 100%;
  height: 524px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 43.90625vw;
    height: 27.291666666666668vw;
  }
`;
