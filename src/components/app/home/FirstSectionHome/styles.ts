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

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    padding-left: 14.21875vw;
    justify-content: flex-start;
  }
`;

export const ImageRigattiEmblem = styled.img`
  position: absolute;
  left: -206px;
  z-index: -1;
  top: 126.44px;
`;

export const ImageWomem = styled.img`
  position: absolute;
  right: 12px;
  width: 480px;
  top: 30%;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    right: -10%;
    width: 680px;
    top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3xl']}) {
    right: 12px;
    width: initial;
    top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h1`
  max-width: 888px;
  line-height: 46px;
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.customFontSizes['4xl']};
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: 400;
  letter-spacing: -1.5px;

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    font-size: ${({ theme }) => theme.customFontSizes['6xl']};
    line-height: 80px;
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

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
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
  .card {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      max-width: 329px;
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

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
  }

  &.button-schedule-appointment {
    width: 100%;
    padding-left: 25.78px;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      max-width: 256px;
      justify-content: flex-start;
    }
  }

  &.button-whatsapp {
    width: 100%;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      max-width: 258px;
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

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    position: absolute;
    left: -10.520833333333334vw;
  }
`;
