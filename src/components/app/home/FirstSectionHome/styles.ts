import { Button } from '@/components/reusables/Button/Button';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4.166666666666667vw;
  padding-top: 67px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    padding-left: 14.21875vw;
    justify-content: flex-start;
  }
`;

export const ImageRigattiEmblem = styled.img`
  position: absolute;
  left: -206px;
  z-index: -1;
  top: 126.44px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    left: -10.729166666666666vw;
    top: 6.585416666666666vw;
    width: 21.458333333333332vw;
    height: 19.6875vw;
  }
`;

export const ImageWomem = styled.img`
  position: absolute;
  right: 12px;
  width: 480px;
  top: 30%;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    right: 0.625vw;
    width: 44.322916666666664vw;
    height: 48.854166666666664vw;
    top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    gap: 2.0833333333333335vw;
  }
`;

export const Title = styled.h1`
  max-width: 888px;
  line-height: 46px;
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.customFontSizes['4xl']};
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: 400;
  letter-spacing: -1.5px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    font-size: ${({ theme }) => theme.customFontSizesVW['6xl']};
    line-height: 4.166666666666667vw;
    letter-spacing: -0.078125vw;
    max-width: 46.25vw;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 30px;
  letter-spacing: -0.35px;
  max-width: 778px;
  padding-top: 5px;
  margin-left: 5px;
  font-weight: 300;

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizesVW.lg};
    line-height: 1.5625vw;
    letter-spacing: -0.018229166666666668vw;
    max-width: 40.520833333333336vw;
    padding-top: 0.2604166666666667vw;
    margin-left: 0.2604166666666667vw;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1025px;
  flex-wrap: wrap;
  padding-top: 7px;
  margin-left: 5px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    gap: 0.8333333333333334vw;
    max-width: 53.385416666666664vw;
    padding-top: 0.3645833333333333vw;
    margin-left: 0.2604166666666667vw;
  }

  .card {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
      max-width: 17.135416666666668vw;
    }
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5px;
  position: relative;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.5208333333333334vw;
    margin-left: 0.2604166666666667vw;
  }
`;

export const ContactButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 22px;
    font-family: ${({ theme }) => theme.fontFamily.playfair};
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
      line-height: 1.1458333333333333vw;
      font-size: ${({ theme }) => theme.fontSizesVW.sm};
    }
  }

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    gap: 0.5208333333333334vw;
    padding: 0.5208333333333334vw 1.1458333333333333vw;
    border-radius: 0.5208333333333334vw;
  }

  &.button-schedule-appointment {
    width: 100%;
    padding-left: 25.78px;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
      max-width: 13.333333333333334vw;
      justify-content: flex-start;
      padding-left: 1.3427083333333334vw;
    }
  }

  &.button-whatsapp {
    width: 100%;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
      max-width: 13.4375vw;
      justify-content: flex-start;
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;

  &:hover {
    filter: brightness(1.1);
  }

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    left: -10.520833333333334vw;
    position: absolute;
  }
`;

export const IconInstagram = styled.img`
  width: 26px;
  height: 26px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    width: 1.3541666666666667vw;
    height: 1.3541666666666667vw;
  }
`;

export const IconBookMark = styled.img`
  width: 17px;
  height: 21px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    width: 0.8854166666666666vw;
    height: 1.09375vw;
  }
`;

export const IconWhatsapp = styled.img`
  width: 22px;
  height: 22px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    width: 1.1458333333333333vw;
    height: 1.1458333333333333vw;
  }
`;
