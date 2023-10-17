'use client';

import * as Styled from './styles';

interface IBlackCardWithTopRightIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string | JSX.Element;
  alt?: string;
  titleCard: JSX.Element | string | undefined;
  desc: JSX.Element | string;
}

export const BlackCardWithTopRightIcon = ({
  icon,
  alt,
  desc,
  titleCard,
  ...props
}: IBlackCardWithTopRightIconProps): JSX.Element => {
  return (
    <Styled.Card {...props}>
      {typeof icon === 'string' ? (
        <Styled.Icon src={icon} alt={alt ?? ''} title={alt ?? ''} />
      ) : (
        icon
      )}
      {typeof titleCard === 'string' ? <p className='title'>{titleCard}</p> : titleCard}
      {typeof desc === 'string' ? <p className='desc'>{desc}</p> : desc}
    </Styled.Card>
  );
};
