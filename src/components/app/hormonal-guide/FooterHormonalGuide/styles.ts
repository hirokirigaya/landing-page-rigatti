import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 116.5px;
  margin-top: 78px;
  margin-bottom: 116px;
  padding-bottom: 116px;
  align-items: center;
  padding-left: 10px;
`;

export const BoxTitleAndButtons = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 58px;
  letter-spacing: -0.7px;
  width: 1049px;
  color: ${({ theme }) => theme.colors.text.nonary};
  font-weight: 400;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 482.21px;
  height: 84.58px;
`;
