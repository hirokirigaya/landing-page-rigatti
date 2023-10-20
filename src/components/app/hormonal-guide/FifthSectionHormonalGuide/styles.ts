import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 114px;
  padding: 0 180px 0 150px;
  margin-top: 195.5px;
  margin-bottom: 800px;
  position: relative;
`;

export const ManReadingBookImage = styled.img`
  position: absolute;
  left: 0;
  top: -780px;
  width: 562.53px;
  height: 924.28px;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 46px;
  letter-spacing: -0.7px;
  color: ${({ theme }) => theme.colors.text.nonary};
  width: 633px;
  font-weight: 400;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 24px;
  letter-spacing: -0.275px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  width: 608px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  /* gap: 0.75rem; */
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.default.white};
  line-height: 24px;
  width: 607px;
  position: relative;
  padding: 16px 0;
  padding-left: 26px;
  letter-spacing: 0.04px;
  /* padding-bottom: 16px; */

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.default.white};
    opacity: 0.2;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 13px;
    height: 12px;
    background-image: url(/icons/rigatti_emblem_icon.svg);
  }

  &:nth-child(1) {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  &:nth-child(2) {
    padding-top: 12px;
    padding-bottom: 14px;
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
`;

export const Video = styled.video`
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background.secondary};
  /* width: 100%;
  height: 524px;
  max-width: 100%; */

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    height: 524px;
    width: 843px;
  }
`;
