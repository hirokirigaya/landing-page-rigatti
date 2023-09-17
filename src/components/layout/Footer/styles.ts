import { Typography } from '@/components/reusables/Typography/Typography';
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
`;

export const Logo = styled.img``;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const BoxContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

export const LinkContact = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.customFontSizes.xl};
  line-height: 26px;
  font-weight: 500;
  text-align: center;
`;

export const Address = styled.p`
  font-weight: 300;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding-top: 2px;
`;

export const HoursOpen = styled.p`
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  font-size: ${({ theme }) => theme.customFontSizes.xs};
`;
