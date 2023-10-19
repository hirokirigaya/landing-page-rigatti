import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 0 39px 0 150px;
  margin-top: 204px;
  position: relative;
`;

export const ManOnStoneImage = styled.img`
  position: absolute;
  left: -80px;
  top: -644px;
  z-index: -1;
  width: 553px;
  height: 908px;
`;

export const DrRigattiImage = styled.img`
  position: absolute;
  right: -189px;
  top: -155px;
  width: 725px;
  height: 906px;
`;

export const DrRigattiLogoCircularImage = styled.img`
  position: absolute;
  width: 168.71px;
  height: 173.58px;
  right: 90px;
  top: 626px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49.5px;
`;

export const BoxTitleSaveTenYearsOfStudyAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60.5px;
`;
export const TitleSaveTenYearsOfStudy = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.text.nonary};
  line-height: 46px;
  letter-spacing: -0.7px;
  width: 437px;
  font-weight: 300;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;

export const DescriptionSaveTenYearsOfStudy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.nonary};
  line-height: 24px;
  letter-spacing: -0.29px;
  width: 361px;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BoxRigattiAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 128px;
`;

export const BoxRigatti = styled.div`
  display: flex;
  flex-direction: column;
  width: 358px;
  height: 878px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.default.black};
`;

export const BoxImageRigatti = styled.div`
  position: relative;
  width: 358px;
  height: 450px;
`;
export const RigattiImage = styled.img`
  position: absolute;
  left: -30px;
  width: 418px;
  height: 597px;
  top: -109px;
`;

export const RigattiMethodImage = styled.img`
  position: absolute;
  left: -72px;
  bottom: 34px;
  width: 87.83px;
  height: 89.94px;
`;

export const BoxContentRigatti = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 38px 24px 50px 30px;
`;

export const TitleRigatti = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 50px;
  letter-spacing: -0.7px;
  font-weight: 700;
`;

export const BoxDescriptionRigatti = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescriptionRigatti = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 300;
  line-height: 26px;
  opacity: 0.8;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 100%;
  padding-top: 115px;
  margin-left: -6px;
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
`;

export const DescriptionGlassEffect = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 20px;
  letter-spacing: 0.075px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.octonary};

  span {
    text-decoration: underline;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 10px;
`;

export const BoxCardsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  &.last-list {
    margin-top: 627px;
  }

  .item-2 {
    .internal-item-2 {
      padding: 20px 0 26px 20px;
      .title {
        letter-spacing: -0px;
      }

      .list {
        max-width: 283px;
        gap: 1px;
      }
    }
  }

  .item-3 {
    .number {
      top: -26px;
    }
    .internal-item-3 {
      padding: 20px 0 26px 24px;
      .title {
        letter-spacing: -0px;
      }
    }
  }

  .internal-item-4 {
    padding: 24px 0px 22px 24px;
    .title {
      width: 193px;
      letter-spacing: 0px;
    }

    .list {
      gap: 1px;
    }
  }

  .item-5 {
    margin-top: 10px;
    .internal-item-5 {
      padding: 24px 0px 24px 24px;

      .list {
        gap: 1px;
      }
    }
  }

  .item-6 {
    margin-top: 18px;

    .internal-item-6 {
      padding: 24px 0px 20px 24px;

      .list {
        gap: 1px;
      }
    }
  }

  .item-7 {
    margin-top: 18px;

    .internal-item-7 {
      padding: 24px 0px 30px 24px;
    }

    .title {
      letter-spacing: -0.1px;
    }

    .list {
      gap: 1px;
    }
  }

  .item-8 {
    margin-top: 17px;

    .internal-item-8 {
      padding: 26px 0px 44px 24px;
    }

    .title {
      letter-spacing: -0.1px;
    }

    .list {
      gap: 1px;
      li {
        letter-spacing: -0.2px;
      }
    }
  }

  .item-9 {
    margin-top: 24px;

    .internal-item-9 {
      padding: 24px 0px 44px 24px;

      .list {
        gap: 1px;

        li {
          letter-spacing: -0.2px;
        }
      }
    }
  }

  .item-10 {
    .internal-item-10 {
      padding: 24px 0px 20px 24px;

      .list {
        gap: 1px;
      }
    }
  }

  .item-11 {
    margin-top: 16px;

    .internal-item-11 {
      padding: 24px 0px 28px 24px;
    }

    .title {
      letter-spacing: -0.1px;
    }

    .list {
      gap: 1.5px;
    }
  }

  .item-12 {
    margin-top: 10px;

    .internal-item-12 {
      padding: 24px 0px 22px 24px;

      .title {
        letter-spacing: -0.1px;
      }

      .list {
        gap: 1px;
      }
    }
  }

  .item-13 {
    margin-top: 13px;

    .internal-item-13 {
      padding: 24px 0px 50px 24px;

      .title {
        letter-spacing: -0.1px;
      }
      .list {
        gap: 1px;
      }
    }
  }

  .item-14 {
    margin-top: 12px;

    .internal-item-14 {
      padding: 24px 0px 30px 24px;

      .list {
        gap: 1px;
      }
    }
  }
`;
