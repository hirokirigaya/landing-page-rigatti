import styled from 'styled-components';

export const Border = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green[300]};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: transparent;
  border-radius: 6px;
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 358px;
  height: 47px;
  filter: drop-shadow(0px 3px 3px ${({ theme }) => theme.colors.green[300]});
`;

export const BoxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 358px;
  height: 47px;
  position: relative;
  background-color: transparent;
  border-radius: 6px;
  border: none;

  p {
    color: ${({ theme }) => theme.colors.default.white};
    position: absolute;
  }
`;
