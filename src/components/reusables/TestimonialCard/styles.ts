import styled from 'styled-components';

export const BoxCardTestimonial = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: 36px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(15px);
  margin-top: 70px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    margin-top: 3.6458333333333335vw;
    box-shadow: 0px 0.4166666666666667vw 0.78125vw 0px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(0.78125vw);
    border-radius: 1.875vw;
  }
`;

export const ImagePerson = styled.img`
  width: 113px;
  height: 113px;
  border-radius: 100%;
  margin-top: -70px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 5.885416666666667vw;
    height: 5.885416666666667vw;
    margin-top: -3.6458333333333335vw;
  }
`;

export const BoxTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px 48px 44px 49px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.0416666666666667vw;
    padding: 1.9791666666666667vw 2.5vw 2.2916666666666665vw 2.5520833333333335vw;
  }
`;

export const TextTestimonial = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text.senary};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-weight: 500;
  font-style: italic;
  text-align: center;
  letter-spacing: -0.1px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.lg};
    letter-spacing: -0.005208333333333333vw;
    line-height: 1.4583333333333333vw;
  }
`;

export const NamePerson = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 26px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.text.quaternary};
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: 400;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
    line-height: 1.3541666666666667vw;
    letter-spacing: -0.026041666666666668vw;
  }
`;
