import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 85px;
  width: 100%;
  align-items: center;
  margin-top: 200px;
  padding: 0 266px 0 250px;
  margin-bottom: 800px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  line-height: 70px;
  letter-spacing: -0.9px;
  width: 1119px;
  color: ${({ theme }) => theme.colors.text.nonary};
  font-weight: 400;
  text-align: center;
  margin-right: -16px;
  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const BoxPlans = styled.div`
  display: flex;
  gap: 80px;
`;

export const BoxPlan = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const TitlePlan = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 46px;
  letter-spacing: -0.6px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.nonary};
  margin-bottom: 13px;

  &.brown {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ContentPlan = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #c3b48b30;
  border-bottom: 2px solid #c3b48b30;
  padding: 21px 0 20px 0;
  height: 307px;
  justify-content: space-between;
`;

export const DescriptionPlan = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.secondary};

  &.white {
    color: ${({ theme }) => theme.colors.default.white};
  }
  &.diamond {
    width: 426px;
  }

  &.silver {
    width: 360px;
  }

  &.gold {
    width: 384px;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Installments = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 46px;
  letter-spacing: -1.2px;
  color: ${({ theme }) => theme.colors.default.white};
  opacity: 0.3;
  margin-bottom: -1px;
`;

export const BoxPrice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  span {
    color: ${({ theme }) => theme.colors.default.white};
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 26px;
    opacity: 0.5;
    padding-top: 5px;
  }
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.colors.default.white};
  font-size: 58px;
  line-height: 56px;
  letter-spacing: -2.2px;
  font-weight: 300;
`;

export const DescriptionPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 26px;
  color: ${({ theme }) => theme.colors.default.white};
  opacity: 0.5;
  margin-top: 11px;
`;

export const ListOfBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  list-style: none;
`;

export const Benefit = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.default.white};
  line-height: 26px;
  letter-spacing: -0.047px;
  font-weight: 400;

  &.brown {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 500;
    letter-spacing: -0.06px;
  }

  &.green {
    color: ${({ theme }) => theme.colors.green[100]};
    text-decoration: underline;
    font-weight: 500;
  }
`;
