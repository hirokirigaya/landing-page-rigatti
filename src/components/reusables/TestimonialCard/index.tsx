'use client';

import * as Styled from './styles';

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  text: string;
  image: string;
  classNameInternal?: string;
}

const TestimonialCard = ({
  classNameInternal,
  image,
  name,
  text,
  ...props
}: TestimonialCardProps) => {
  return (
    <Styled.BoxCardTestimonial {...props}>
      <Styled.ImagePerson src={image} alt='Avatar do usuário' title='Avatar do usuário' />
      <Styled.BoxTestimonial className={classNameInternal}>
        <Styled.TextTestimonial>{text}</Styled.TextTestimonial>
        <Styled.NamePerson>- {name}</Styled.NamePerson>
      </Styled.BoxTestimonial>
    </Styled.BoxCardTestimonial>
  );
};

export default TestimonialCard;
