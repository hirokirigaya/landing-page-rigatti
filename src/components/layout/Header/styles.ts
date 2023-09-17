import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 40px 49.32px 0 55px;
  width: 100%;
  position: relative;
  gap: 1rem;
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 2.0833333333333335vw 2.56875vw 0 2.8645833333333335vw;
    gap: 0;
  }
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 9.947916666666666vw;
    height: 1.3020833333333333vw;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4.204166666666667vw;
  justify-content: space-between;
  width: 100%;

  .btn-menu {
    display: flex;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['2lg']}) {
    justify-content: flex-start;
    width: initial;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 6.547916666666667vw;
  }
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['2lg']}) {
    display: flex;
  }
`;

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 29px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.03125vw;
  }
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
  }

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 18px;
    background: ${({ theme }) => theme.colors.text.tertiary};
    right: -20px;
    opacity: 0.2;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 0.052083333333333336vw;
      height: 0.9375vw;
      right: -1.0416666666666667vw;
    }
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const LinkNav = styled(Link)`
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 21.46px;
  width: 100%;
  justify-content: center;

  .btn-menu {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      display: flex;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['2lg']}) {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    justify-content: flex-end;
  }
`;

export const Hr = styled.hr`
  max-width: 412px;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.text.tertiary};
  display: none;
  margin-left: 10px;
  margin-right: 20.59px;
  opacity: 0.1;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    display: block;
    margin-right: 1.0723958333333334vw;
    margin-left: 0.5208333333333334vw;
    width: 21.458333333333332vw;
    height: 0.15625vw;
  }
`;

export const BoxLocale = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    text-align: right;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.10416666666666667vw;
  }
`;

export const TitleHours = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.quaternary};
  font-weight: 700;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
  }
`;

export const Locale = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.quaternary};
  font-style: italic;
  font-weight: 300;
  padding-right: 5px;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
    padding-right: 0.2604166666666667vw;
  }
`;

export const LinkIconWhatsapp = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 21.46px;
  transition: all 0.2s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.1177083333333333vw;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

export const IconWhatsapp = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 1.0416666666666667vw;
    height: 1.0416666666666667vw;
  }
`;

export const TextWhatsapp = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.quaternary};
  font-weight: 700;
  cursor: pointer;
  display: none;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    display: block;
    font-size: ${({ theme }) => theme.fontSizesVW.xl};
  }
`;

// MOBILE STYLES

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.collapsed {
    gap: 0;
  }

  &:hover {
    gap: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['2lg']}) {
    display: none;
  }
`;

export const LineBurguerMenu = styled.div`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.text.tertiary};

  &.mid-line {
    display: none;
  }

  &.top-line {
    transform: rotate(0);
    transition: all 0.2s ease-in-out;
    margin-bottom: 0;

    &.rotate {
      transform: rotate(45deg);
      translate: translateY(2px);
      margin-bottom: -2px;
    }
  }

  &.bottom-line {
    transform: rotate(0);
    transition: all 0.2s ease-in-out;

    &.rotate {
      transform: rotate(-45deg);
      translate: translateY(-2px);
    }
  }
`;

export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  background: ${({ theme }) => theme.colors.background.primary};
  width: 100%;
  padding: 20px;
  padding-left: 55px;
  top: 100%;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.text.tertiary}20`};

  &.menu-mobile {
    transition: all 0.6s ease-in-out;
    left: -100%;
  }

  &.menu-mobile.collapsed {
    left: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['2lg']}) {
    display: none;
  }
`;

export const ListNavMobile = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
`;

export const ItemListMobile = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  padding-left: 20px;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 18px;
    background: ${({ theme }) => theme.colors.text.tertiary};
    left: 0;
    opacity: 0.2;
  }
`;

export const LinkNavMobile = styled(Link)`
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    filter: brightness(1.1);
  }
`;
