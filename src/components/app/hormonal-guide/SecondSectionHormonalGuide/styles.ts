import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  gap: 166.5px;
  padding: 0 153px 0 93px;
  margin-top: 257.4px;
  margin-bottom: 200px;
`;

export const RigattiEmblem = styled.img`
  position: absolute;
  right: -245px;
  bottom: 0;
  width: 456.37px;
  height: 418.08px;
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 130px;
`;

export const BoxSubtitleAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 25px;
  font-weight: 400;
  letter-spacing: -0.075px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.nonary};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['5.1xl']};
  font-weight: 400;
  max-width: 836px;
  letter-spacing: -1.1px;
  line-height: 62px;

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
  gap: 26px;
  max-width: 683px;
  margin-top: 5px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.default.white};
  line-height: 26px;
  font-weight: 300;

  &.brown {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 600;
    font-style: italic;
  }
`;

export const BoxDiamondIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: -1px;
  margin-left: -2px;
`;

export const DiamondIcon = styled.img`
  width: 139px;
  height: 155px;
`;

export const BoxLeft = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  justify-content: center;
  padding-bottom: 46px;
`;

export const DoctorRigattiCircularLogo = styled.img`
  position: absolute;
  top: -145px;
  left: -38px;
  width: 156.18px;
  height: 160.69px;
`;

export const BoxGlassEffect = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 667px;
  height: 159px;
  background: rgba(26, 26, 26, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: inset 0 10px 20px -14px rgba(255, 255, 255, 0.3);
`;

export const ContentBoxGlassEffect = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 27px 35px 28px;
  box-shadow: 0 20px 300px -20px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  gap: 13px;
`;

export const DescriptionBoxGlassEffect = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.default.white};
  font-style: italic;
  line-height: 28px;
  text-align: center;
`;

export const AuthorBoxGlassEffect = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.nonary};
  line-height: 26px;
  opacity: 0.4;
  text-align: center;
  font-weight: 300;
`;

export const Quotes = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: 200px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 900;
  position: absolute;
  top: 23px;
  line-height: 0;
  user-select: none;
  z-index: -1;
`;

export const FatherWithChildren = styled.img`
  position: absolute;
  bottom: 32px;
  left: -194px;
  width: 1137px;
  height: 1004px;
`;
