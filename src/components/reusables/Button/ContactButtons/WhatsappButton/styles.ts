import { Button } from '../../Button';
import styled from 'styled-components';

export const ContactButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 22px;
    font-family: ${({ theme }) => theme.fontFamily.playfair};
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      line-height: 1.1458333333333333vw;
      font-size: ${({ theme }) => theme.fontSizesVW.sm};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.5208333333333334vw;
    padding: 0.5208333333333334vw 1.1458333333333333vw;
    border-radius: 0.5208333333333334vw;
  }

  &.button-whatsapp {
    width: 100%;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      max-width: 13.4375vw;
      justify-content: flex-start;
    }
  }
`;

export const IconWhatsapp = styled.img`
  width: 22px;
  height: 22px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 1.1458333333333333vw;
    height: 1.1458333333333333vw;
  }
`;
