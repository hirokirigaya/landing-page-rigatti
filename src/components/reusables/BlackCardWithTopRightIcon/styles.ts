import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 17px 13px 20px 24px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  width: 240px;
  height: 190px;

  .title {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.default.white};
    font-weight: 600;
  }

  .desc {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.default.white};
    font-weight: 300;
  }
`;

export const Icon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: -12px;
  right: 30px;
`;
