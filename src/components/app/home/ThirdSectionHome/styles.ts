import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 73px;
  align-items: center;
  padding: 0 4.166666666666667vw;
  width: 100%;
  flex-direction: column;
  padding-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0;
    padding-top: 0;
    padding-left: 6.197916666666667vw;
    gap: 3.8020833333333335vw;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const ContainerDepositions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  width: 100%;
  max-width: 784px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    max-width: 40.833333333333336vw;
    gap: 0.5208333333333334vw;
  }

  .testimonial-card {
    max-width: 387px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      max-width: 20.15625vw;
    }
  }

  .logo {
    position: absolute;
    bottom: -108px;
    left: -94px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      bottom: -5.625vw;
      left: -4.895833333333333vw;
      width: 11.458333333333334vw;
      height: 11.666666666666666vw;
    }
  }
`;

export const BoxDepositions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.7708333333333333vw;
  }

  .testimonial-card {
    &.one,
    &.four {
      background-color: ${({ theme }) => theme.colors.background.quaternary};
    }
  }

  .testimonial-card-internal {
    &.one,
    &.four {
      padding-bottom: 30px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding-bottom: 1.5625vw;
      }
    }
  }
`;

export const Image = styled.img``;

export const BoxTreatments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  position: relative;
  width: 100%;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.03125vw;
  }

  .whatsapp-btn {
    margin-top: 24px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 1.25vw;
    }
  }

  .rigatti-emblem {
    display: none;
    position: absolute;
    z-index: -1;
    right: -652px;
    top: -37px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      right: -33.958333333333336vw;
      top: -1.9270833333333333vw;
      width: 66.92708333333333vw;
      height: 61.354166666666664vw;
      display: block;
    }
  }

  .dr-rigatti {
    display: none;
    position: absolute;
    z-index: -1;
    right: -182px;
    top: -14px;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      display: block;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      right: -9.479166666666666vw;
      top: -0.7291666666666666vw;
      width: 38.75vw;
      height: 58.125vw;
    }
  }
`;

export const TitleTreatment = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.quinary};
  line-height: 38px;
  letter-spacing: -1px;
  max-width: 439px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    line-height: 58px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['5xl']};
    line-height: 3.0208333333333335vw;
    letter-spacing: -0.052083333333333336vw;
    max-width: 22.864583333333332vw;
  }

  span {
    font-style: italic;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      text-decoration-thickness: 0.052083333333333336vw;
    }
  }
`;

export const DescriptionTreatment = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  letter-spacing: -0.3px;
  max-width: 416px;
  line-height: 24px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    letter-spacing: -0.015625vw;
    max-width: 21.666666666666668vw;
    line-height: 1.5625vw;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 500;
  }
`;

export const BoxListOfTreatments = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
  padding-left: 35px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.7291666666666666vw;
    margin-top: 1.0416666666666667vw;
    padding-left: 1.8229166666666667vw;
  }
`;

export const ItemListTreatment = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.5208333333333334vw;
  }

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: -34px;
    width: 12.99px;
    height: 11.9px;
    background-image: url('/icons/rigatti_emblem_icon.svg');
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      top: 0.20833333333333334vw;
      left: -1.7708333333333333vw;
      width: 0.6765625vw;
      height: 0.6197916666666666vw;
    }
  }

  p {
    max-width: 337px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      max-width: 17.552083333333332vw;
    }
  }

  &.treatment-4 {
    p {
      max-width: 280px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        max-width: 14.583333333333334vw;
      }
    }
  }
  &.treatment-7 {
    p {
      max-width: 274px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        max-width: 14.270833333333334vw;
      }
    }
  }
`;

export const TitleItemListTreatment = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text.tertiary};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.09375vw;
    font-size: ${({ theme }) => theme.fontSizesVW.xs};
  }
`;

export const DescriptionItemListTreatment = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 300;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text.tertiary};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.09375vw;
    font-size: ${({ theme }) => theme.fontSizesVW.xs};
  }
`;
