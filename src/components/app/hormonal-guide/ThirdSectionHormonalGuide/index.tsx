'use client';

import TestimonialCard from '@/components/reusables/TestimonialCard';
import * as Styled from './styles';

const feedbacks = [
  {
    id: 'one',
    name: 'lorem ipsum dolor',
    text: 'Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat',
    image: '/images/home/third_section/person_1.svg',
  },
  {
    id: 'three',
    name: 'lorem ipsum dolor',
    text: 'Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat. Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat',
    image: '/images/home/third_section/person_2.svg',
  },
  {
    id: 'four',
    name: 'lorem ipsum dolor',
    text: 'Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat',
    image: '/images/home/third_section/person_4.svg',
  },
  {
    id: 'two',
    name: 'lorem ipsum dolor',
    text: 'Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat. Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat',
    image: '/images/home/third_section/person_3.svg',
  },
];

export const ThirdSectionHormonalGuide = (): JSX.Element => {
  return (
    <Styled.Container>
      {feedbacks.map((feedback) => {
        return (
          <TestimonialCard
            className={`feedback-card ${feedback.id}`}
            classNameInternal={`feedback-card-internal ${feedback.id}`}
            key={String(feedback.id + Math.random())}
            name={feedback.name}
            text={feedback.text}
            image={feedback.image}
          />
        );
      })}
    </Styled.Container>
  );
};
