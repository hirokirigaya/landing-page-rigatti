import Link from 'next/link';
import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 130px 16px 126px 16px;
  gap: 41.49px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    padding: 6.770833333333333vw 0.8333333333333334vw 6.5625vw 0.8333333333333334vw;
    gap: 2.1609375vw;
  }
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    width: 15.052083333333334vw;
    height: 3.6979166666666665vw;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
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

export const BoxContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    gap: 0.3125vw;
  }
`;

export const LinkContact = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.customFontSizes.xl};
  line-height: 26px;
  font-weight: 500;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    font-size: ${({ theme }) => theme.customFontSizesVW.xl};
    line-height: 1.3541666666666667vw;
  }
`;

export const Address = styled.p`
  font-weight: 300;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding-top: 2px;

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    padding-top: 0.10416666666666667vw;
    line-height: 1.3541666666666667vw;
  }
`;

export const HoursOpen = styled.p`
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  font-size: ${({ theme }) => theme.customFontSizes.xs};

  @media (min-width: ${({ theme }) => theme.customBreakPoints.lg}) {
    line-height: 1.3541666666666667vw;
  }
`;
