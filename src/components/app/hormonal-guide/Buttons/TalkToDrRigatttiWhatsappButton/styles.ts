import styled from 'styled-components';

export const Border = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green[300]};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: transparent;
  border-radius: 6px;
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 100%;
  height: 47px;
  filter: drop-shadow(0px 3px 3px ${({ theme }) => theme.colors.green[300]});

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 100%;
    max-width: 358px;
    height: 47px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 18.645833333333332vw;
    height: 2.4479166666666665vw;
    border-radius: 0.3125vw;
    padding: 0.625vw 1.5625vw;
    border: 0.052083333333333336vw solid ${({ theme }) => theme.colors.green[500]};
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }
`;

export const BoxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
  position: relative;
  background-color: transparent;
  border-radius: 6px;
  border: none;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 100%;
    max-width: 358px;
    height: 47px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    width: 18.645833333333332vw;
    height: 2.4479166666666665vw;
    border-radius: 0.3125vw;
    font-size: ${({ theme }) => theme.fontSizesVW.md};
  }

  p {
    color: ${({ theme }) => theme.colors.default.white};
    position: absolute;
  }
`;
