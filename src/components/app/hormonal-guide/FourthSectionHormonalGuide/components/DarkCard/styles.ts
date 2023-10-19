import styled from 'styled-components';

interface ICard {
  variant?: 'dark' | 'light';
}

export const Card = styled.div<ICard>`
  position: relative;
  width: 316px;
  background: ${({ variant }) =>
    variant === 'dark'
      ? 'rgba(0, 0, 0, 0.25)'
      : variant === 'light'
      ? 'rgba(255, 255, 255, 0.03)'
      : 'rgba(0, 0, 0, 0.25)'};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow: ${({ variant }) =>
    variant === 'dark'
      ? 'inset 0 10px 250px 0 rgba(0, 0, 0, 0.2)'
      : variant === 'light'
      ? '0 10px 250px 0 rgba(255, 255, 255, 0.02)'
      : 'inset 0 10px 250px 0 rgba(0, 0, 0, 0.2)'};
`;

export const Number = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  font-size: 50px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  position: absolute;
  top: -20px;
  left: 22px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 20px 0 10px 20px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.175px;
`;

export const ListOfItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-width: 279px;
  /* gap: 1px; */
`;

export const Item = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.octonary};
  line-height: 19px;
  font-weight: 300;
  letter-spacing: -0.1px;
  /* opacity: 0.8; */
`;
