import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 0 39px 0 150px;
  margin-top: 204px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0 2.03125vw 0 7.8125vw;
    margin-top: 10.625vw;
  }
`;

export const ManOnStoneImage = styled.img`
  position: absolute;
  left: -80px;
  top: -644px;
  z-index: -1;
  width: 553px;
  height: 908px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    left: -4.166666666666667vw;
    top: -33.541666666666664vw;
    width: 28.802083333333332vw;
    height: 47.291666666666664vw;
  }
`;

export const DrRigattiImage = styled.img`
  position: absolute;
  right: -189px;
  top: -155px;
  width: 725px;
  height: 906px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    right: -9.84375vw;
    top: -8.072916666666666vw;
    width: 37.760416666666664vw;
    height: 47.1875vw;
  }
`;

export const DrRigattiLogoCircularImage = styled.img`
  position: absolute;
  width: 168.71px;
  height: 173.58px;
  right: 90px;
  top: 626px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 8.786979166666667vw;
    height: 9.040625vw;
    right: 4.6875vw;
    top: 32.604166666666664vw;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49.5px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.578125vw;
  }
`;

export const BoxTitleSaveTenYearsOfStudyAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60.5px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 3.1510416666666665vw;
  }
`;
export const TitleSaveTenYearsOfStudy = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.text.nonary};
  line-height: 46px;
  letter-spacing: -0.7px;
  width: 437px;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 2.3958333333333335vw;
    letter-spacing: -0.036458333333333336vw;
    width: 22.760416666666668vw;
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      text-decoration-thickness: 0.052083333333333336vw;
    }
  }
`;

export const DescriptionSaveTenYearsOfStudy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.nonary};
  line-height: 24px;
  letter-spacing: -0.29px;
  width: 361px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
    line-height: 1.25vw;
    letter-spacing: -0.015104166666666665vw;
    width: 18.802083333333332vw;
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.5208333333333334vw;
  }
`;

export const BoxRigattiAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 128px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.6041666666666665vw;
    margin-top: 6.666666666666667vw;
  }
`;

export const BoxRigatti = styled.div`
  display: flex;
  flex-direction: column;
  width: 358px;
  height: 878px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.default.black};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 18.645833333333332vw;
    height: 45.729166666666664vw;
    border-radius: 0.5208333333333334vw;
  }
`;

export const BoxImageRigatti = styled.div`
  position: relative;
  width: 358px;
  height: 450px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 18.645833333333332vw;
    height: 23.4375vw;
  }
`;
export const RigattiImage = styled.img`
  position: absolute;
  left: -30px;
  width: 418px;
  height: 597px;
  top: -109px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    left: -1.5625vw;
    width: 21.770833333333332vw;
    height: 31.09375vw;
    top: -5.677083333333333vw;
  }
`;

export const RigattiMethodImage = styled.img`
  position: absolute;
  left: -72px;
  bottom: 34px;
  width: 87.83px;
  height: 89.94px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    left: -3.75vw;
    bottom: 1.7708333333333333vw;
    width: 4.574479166666666vw;
    height: 4.684375vw;
  }
`;

export const BoxContentRigatti = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 38px 24px 50px 30px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.7708333333333333vw;
    padding: 1.9791666666666667vw 1.25vw 2.6041666666666665vw 1.5625vw;
  }
`;

export const TitleRigatti = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 50px;
  letter-spacing: -0.7px;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 2.6041666666666665vw;
    letter-spacing: -0.036458333333333336vw;
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
  }
`;

export const BoxDescriptionRigatti = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.0416666666666667vw;
  }
`;

export const DescriptionRigatti = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 300;
  line-height: 26px;
  opacity: 0.8;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    line-height: 1.3541666666666667vw;
    font-size: ${({ theme }) => theme.fontSizesVW.sm};
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 100%;
  padding-top: 115px;
  margin-left: -6px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 2.34375vw;
    padding-top: 5.989583333333333vw;
    margin-left: -0.3125vw;
  }
`;

export const BoxGlassEffect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 968px;
  height: 69px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 23px 0 24px 24px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 50.416666666666664vw;
    height: 3.59375vw;
    border-radius: 1.0416666666666667vw;
    padding: 1.1979166666666667vw 0 1.25vw 1.25vw;
  }
`;

export const TitleBoxGlassEffect = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 20px;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 400;
  position: absolute;
  top: -15px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.xl};
    line-height: 1.0416666666666667vw;
    letter-spacing: -0.010416666666666666vw;
    top: -0.78125vw;
  }
`;

export const DescriptionGlassEffect = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 20px;
  letter-spacing: 0.075px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.octonary};

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW.md};
    line-height: 1.0416666666666667vw;
    letter-spacing: 0.00390625vw;
  }

  span {
    text-decoration: underline;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 0.5208333333333334vw;
  }
`;

export const BoxCardsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    gap: 1.1458333333333333vw;
  }

  &.last-list {
    margin-top: 627px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 32.65625vw;
    }
  }

  .item-2 {
    .internal-item-2 {
      padding: 20px 0 26px 20px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.0416666666666667vw 0 1.3541666666666667vw 1.0416666666666667vw;
      }
      .title {
        letter-spacing: -0px;
      }

      .list {
        max-width: 283px;
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          max-width: 14.739583333333334vw;
          gap: 0.052083333333333336vw;
        }
      }
    }
  }

  .item-3 {
    .number {
      top: -26px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        top: -1.3541666666666667vw;
      }
    }
    .internal-item-3 {
      padding: 20px 0 26px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.0416666666666667vw 0 1.3541666666666667vw 1.25vw;
      }
      .title {
        letter-spacing: -0px;
      }
    }
  }

  .internal-item-4 {
    padding: 24px 0px 22px 24px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      padding: 1.25vw 0px 1.1458333333333333vw 1.25vw;
    }

    .title {
      width: 193px;
      letter-spacing: 0px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        width: 10.052083333333334vw;
      }
    }

    .list {
      gap: 1px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        gap: 0.052083333333333336vw;
      }
    }
  }

  .item-5 {
    margin-top: 10px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.5208333333333334vw;
    }

    .internal-item-5 {
      padding: 24px 0px 24px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.25vw 1.25vw;
      }

      .list {
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }
      }
    }
  }

  .item-6 {
    margin-top: 18px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.9375vw;
    }

    .internal-item-6 {
      padding: 24px 0px 20px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.0416666666666667vw 1.25vw;
      }

      .list {
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }
      }
    }
  }

  .item-7 {
    margin-top: 18px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.9375vw;
    }

    .internal-item-7 {
      padding: 24px 0px 30px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.5625vw 1.25vw;
      }
    }

    .title {
      letter-spacing: -0.1px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        letter-spacing: -0.005208333333333333vw;
      }
    }

    .list {
      gap: 1px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        gap: 0.052083333333333336vw;
      }
    }
  }

  .item-8 {
    margin-top: 17px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.8854166666666666vw;
    }

    .internal-item-8 {
      padding: 26px 0px 44px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.3541666666666667vw 0px 2.2916666666666665vw 1.25vw;
      }
    }

    .title {
      letter-spacing: -0.1px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        letter-spacing: -0.005208333333333333vw;
      }
    }

    .list {
      gap: 1px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        gap: 0.052083333333333336vw;
      }
      li {
        letter-spacing: -0.2px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          letter-spacing: -0.010416666666666666vw;
        }
      }
    }
  }

  .item-9 {
    margin-top: 24px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 1.25vw;
    }

    .internal-item-9 {
      padding: 24px 0px 44px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 2.2916666666666665vw 1.25vw;
      }

      .list {
        gap: 1px;
        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }

        li {
          letter-spacing: -0.2px;

          @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
            letter-spacing: -0.010416666666666666vw;
          }
        }
      }
    }
  }

  .item-10 {
    .internal-item-10 {
      padding: 24px 0px 20px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.0416666666666667vw 1.25vw;
      }

      .list {
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }
      }
    }
  }

  .item-11 {
    margin-top: 16px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.8333333333333334vw;
    }

    .internal-item-11 {
      padding: 24px 0px 28px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.4583333333333333vw 1.25vw;
      }
    }

    .title {
      letter-spacing: -0.1px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        letter-spacing: -0.005208333333333333vw;
      }
    }

    .list {
      gap: 1.5px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        gap: 0.078125vw;
      }
    }
  }

  .item-12 {
    margin-top: 10px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.5208333333333334vw;
    }

    .internal-item-12 {
      padding: 24px 0px 22px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.1458333333333333vw 1.25vw;
      }

      .title {
        letter-spacing: -0.1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          letter-spacing: -0.005208333333333333vw;
        }
      }

      .list {
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }
      }
    }
  }

  .item-13 {
    margin-top: 13px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.6770833333333334vw;
    }

    .internal-item-13 {
      padding: 24px 0px 50px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 2.6041666666666665vw 1.25vw;
      }

      .title {
        letter-spacing: -0.1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          letter-spacing: -0.005208333333333333vw;
        }
      }
      .list {
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }
      }
    }
  }

  .item-14 {
    margin-top: 12px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      margin-top: 0.625vw;
    }

    .internal-item-14 {
      padding: 24px 0px 30px 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding: 1.25vw 0px 1.5625vw 1.25vw;
      }

      .list {
        gap: 1px;

        @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
          gap: 0.052083333333333336vw;
        }
      }
    }
  }
`;
