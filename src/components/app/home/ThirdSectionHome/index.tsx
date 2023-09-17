'use client';

import WhatsappButton from '@/components/reusables/Button/ContactButtons/WhatsappButton';
import TestimonialCard from '@/components/reusables/TestimonialCard';
import * as Styled from './styles';

const Depositions = [
  [
    {
      id: 'one',
      name: 'lorem ipsum dolor',
      text: 'Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat',
      image: '/images/home/third_section/person_1.svg',
    },
    {
      id: 'two',
      name: 'lorem ipsum dolor',
      text: 'Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat. Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras a elementum risus. Nulla facilisi. Aliquam erat volutpat',
      image: '/images/home/third_section/person_3.svg',
    },
  ],
  [
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
  ],
];

const Treatments = [
  {
    id: 1,
    className: 'treatment-1',
    title: 'Emagrecimento',
    description:
      'Juntos alcançaremos seus objetivos de emagrecimento de forma saudável e duradoura​',
  },
  {
    id: 2,
    className: 'treatment-2',
    title: 'Equilibrio hormonal',
    description: 'Especialistas em equilibrar seus hormônios para um corpo e mente saudáveis.',
  },
  {
    id: 3,
    className: 'treatment-3',
    title: 'Ansiedade e compulsão',
    description: 'Redução do estresse e melhora na gestão das compulsões alimentares.',
  },
  {
    id: 4,
    className: 'treatment-4',
    title: 'Libido e desejo sexual',
    description: 'Aumento da libido e melhora na qualidade da vida sexual.',
  },
  {
    id: 5,
    className: 'treatment-5',
    title: 'Endometriose',
    description:
      'Alívio dos sintomas da endometriose, como dor pélvica e dor durante o período menstrual.',
  },
  {
    id: 6,
    className: 'treatment-6',
    title: 'Perda de cabelo',
    description: 'Prevenção da queda de cabelo e estimulação do crescimento capilar.',
  },
  {
    id: 7,
    className: 'treatment-7',
    title: 'Gordura localizada',
    description: 'Redução da gordura localizada e melhora da silhueta corporal.',
  },
];
const ThirdSectionHome = () => {
  return (
    <Styled.Container>
      <Styled.ContainerDepositions>
        {Depositions.map((deposition, index) => (
          <Styled.BoxDepositions key={String(index + deposition.length + Math.random())}>
            {deposition.map((item) => (
              <TestimonialCard
                className={`testimonial-card ${item.id}`}
                classNameInternal={`testimonial-card-internal ${item.id}`}
                key={String(item.id + Math.random())}
                name={item.name}
                text={item.text}
                image={item.image}
              />
            ))}
          </Styled.BoxDepositions>
        ))}
        <Styled.Image
          src='/logo_rigatti_circular.svg'
          alt='logo escrito clínica rigatti'
          title='Logo clínica Rigatti'
          className='logo'
        />
      </Styled.ContainerDepositions>
      <Styled.BoxTreatments>
        <Styled.TitleTreatment>
          As palavras motivam, <span>o exemplo arrasta.</span>
        </Styled.TitleTreatment>
        <Styled.DescriptionTreatment>
          O primeiro passo é o que precisamos para <span>começar a nossa mudança</span>. A motivação
          vem daquilo que observamos e isto te inspira, o{' '}
          <span>desejo de estar equilibrada, plena e feliz.</span>
        </Styled.DescriptionTreatment>
        <Styled.BoxListOfTreatments>
          {Treatments.map((treatment) => (
            <Styled.ItemListTreatment key={String(treatment.id)} className={treatment.className}>
              <Styled.TitleItemListTreatment>{treatment.title}</Styled.TitleItemListTreatment>
              <Styled.DescriptionItemListTreatment>
                {treatment.description}
              </Styled.DescriptionItemListTreatment>
            </Styled.ItemListTreatment>
          ))}
        </Styled.BoxListOfTreatments>
        <WhatsappButton className='whatsapp-btn' />

        <Styled.Image
          src='/rigatti_emblem_large.svg'
          alt='emblema clínica rigatti'
          title='Emblema clínica Rigatti'
          className='rigatti-emblem'
        />
        <Styled.Image
          src='/images/dr_rigatti.png'
          alt='Dr. Rigatti'
          title='Dr. Rigatti'
          className='dr-rigatti'
        />
      </Styled.BoxTreatments>
    </Styled.Container>
  );
};

export default ThirdSectionHome;
