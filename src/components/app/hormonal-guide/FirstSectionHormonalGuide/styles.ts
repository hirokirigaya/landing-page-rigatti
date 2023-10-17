import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 92.5px;
  padding: 115px 57px 0 55px;
  position: relative;
  width: 100%;
`;

export const ImageBackground = styled.img`
  position: absolute;
  width: 2058px;
  height: 1372px;
  right: -17px;
  top: -47px;
  z-index: -1;
`;

export const BoxContent = styled.div`
  display: flex;
  gap: 137px;
  width: 100%;
`;

export const BoxLineAndInstagramIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-top: 19px;
`;

export const Line = styled.div`
  width: 2px;
  height: 380px;
  background: ${({ theme }) => theme.colors.darkGray[300]};
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  height: 26px;
  width: 26px;
`;

export const IconInstagram = styled.img`
  height: 26px;
  width: 26px;
`;

export const BoxTextAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
`;

export const BoxTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.octonary};
  letter-spacing: -0.15px;
  font-style: italic;
  line-height: 25px;
  margin-left: 1px;

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  max-width: 694px;
  font-size: ${({ theme }) => theme.fontSizes['5.1xl']};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.text.octonary};
  letter-spacing: -1.15px;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;

    &.white-color {
      color: ${({ theme }) => theme.colors.text.octonary};
    }
  }
`;

export const BoxTitleAndBoxGlassEffect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BoxGlassEffect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 511px;
  height: 98px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 20px;
`;

export const BoxContentGlassEffect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 28px 0 40px;
  gap: 5px;
`;

interface TypographyBoxGlassEffectProps {
  borderBottom?: boolean;
}

export const TypographyBoxGlassEffect = styled.p<TypographyBoxGlassEffectProps>`
  position: relative;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.text.secondary};

  &:after {
    content: '';
    display: ${({ borderBottom }) => (borderBottom ? 'block' : 'none')};
    position: absolute;
    bottom: -2.5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.15;
  }
`;

export const EmblemRigattiIcon = styled.img`
  position: absolute;
  right: -12px;
  width: 24.56px;
  height: 22.5px;
`;

export const Paragraph = styled.p`
  max-width: 643px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 26px;
  font-weight: 300;
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colors.text.octonary};

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-style: italic;
    font-weight: 500;
    letter-spacing: 0;
    letter-spacing: 0.1px;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BoxCards = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 45.5px;

  .card-3 {
    margin-left: 1px;
  }
`;

export const IconCard = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: -13px;
  right: 29px;

  &.icon-card-1 {
    right: 35px;
  }

  &.icon-card-2 {
    right: 33px;
    top: -12px;
  }
`;

export const TitleCard = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.15px;
  color: ${({ theme }) => theme.colors.text.octonary};

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &.title-card-1 {
    max-width: 127px;
  }

  &.title-card-2 {
    max-width: 181px;
  }

  &.title-card-3 {
    max-width: 130px;
  }
`;

export const DescriptionCard = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 300;
  line-height: 18px;
  letter-spacing: -0.15px;
  color: ${({ theme }) => theme.colors.text.octonary};
`;