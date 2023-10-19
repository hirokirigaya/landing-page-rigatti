'use client';

import * as Styled from './styles';

interface DarkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  title: string;
  items: string[];
  variant?: 'dark' | 'light';
  internalClassName?: string;
}

export const DarkCard = ({
  number,
  title,
  items,
  variant = 'dark',
  internalClassName,
  ...props
}: DarkCardProps): JSX.Element => {
  return (
    <Styled.Card {...props} variant={variant}>
      <Styled.Number className='number'>{number}</Styled.Number>
      <Styled.ContentCard className={internalClassName}>
        <Styled.Title className='title'>{title}</Styled.Title>
        <Styled.ListOfItems className='list'>
          {items.map((item, index) => (
            <Styled.Item key={`${item.split(' ')[0]}-${index}`}>- {item}</Styled.Item>
          ))}
        </Styled.ListOfItems>
      </Styled.ContentCard>
    </Styled.Card>
  );
};
