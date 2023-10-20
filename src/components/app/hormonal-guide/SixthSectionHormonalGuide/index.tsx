'use client';

import * as Styled from './styles';

const plans = [
  {
    id: 1,
    title: 'Silver',
    className: '',
    description: 'Acesso por 6 meses a todos os módulos do curso, canal direto com o Dr. Rigatti.',
    classNameDescription: 'silver',
    installments: '11 x',
    price: 'R$ 1.200,00',
    descriptionPrice: 'R$ 12.000,00 à vista, pagamento via PIX.',
    benefits: [
      {
        id: 1,
        description: '• Acesso a todas as aulas por 6 meses.',
        className: '',
      },
      {
        id: 2,
        description: '• Certificado físico de prescritor hormonal.',
        className: '',
      },
      {
        id: 3,
        description: '• Canal direto para dúvidas com o Dr. Rigatti.',
        className: '',
      },
      {
        id: 4,
        description: '• Você terá acesso a 14 módulos sobre hormônios.',
        className: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Gold',
    className: '',
    description:
      'Te convido a passar uma semana ao meu lado, prescrevendo e tratando de casos reais no meu dia a dia.',
    classNameDescription: 'gold',
    installments: '11 x',
    price: 'R$ 2.500,00',
    descriptionPrice: 'R$ 25.000,00 à vista, pagamento via PIX.',
    benefits: [
      {
        id: 1,
        description: '• Tudo que está no pacote Silver.',
        className: 'brown',
      },
      {
        id: 2,
        description: '• Ingresso garantido na 1ª Mentoria Física.',
        className: 'brown',
      },
      {
        id: 3,
        description: '• Passe uma semana ao lado do Dr. Rigatti prescrevendo.',
        className: 'green',
      },
    ],
  },
  {
    id: 3,
    title: 'Diamond',
    className: 'brown',
    description:
      'Conheça todos os processos da minha clínica, ensino como gerenciar e faturar mais de R$ 1 milhão por mês, na prática.',
    classNameDescription: 'white diamond',
    installments: '11 x',
    price: 'R$ 5.000,00',
    descriptionPrice: 'R$ 50.000,00 à vista, pagamento via PIX.',
    benefits: [
      {
        id: 1,
        description: '• Tudo que está no pacote Silver.',
        className: 'brown',
      },
      {
        id: 2,
        description: '• Tudo que está no pacote Gold.',
        className: 'brown',
      },
      {
        id: 3,
        description: '• Oportunidade de sociedade em clínicas futuras.',
        className: 'green',
      },
      {
        id: 4,
        description: '• Como faturar mais de R$ 1 milhão / mês.',
        className: 'green',
      },
      {
        id: 5,
        description: '• Conheça todo o funcionamento dos setores da Clínica do Dr. Rigatti.',
        className: 'green',
      },
    ],
  },
];

export const SixthSectionHormonalGuide = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Title>
        Para você que enxerga o futuro: <span>Domine os segredos da Reposição Hormonal agora</span>{' '}
        e transforme vidas!
      </Styled.Title>
      <Styled.BoxPlans>
        {plans.map((plan) => {
          return (
            <Styled.BoxPlan key={plan.id}>
              <Styled.TitlePlan className={plan.className}>{plan.title}</Styled.TitlePlan>
              <Styled.ContentPlan>
                <Styled.DescriptionPlan className={plan.classNameDescription}>
                  {plan.description}
                </Styled.DescriptionPlan>

                <Styled.ContainerPrice>
                  <Styled.Installments>{plan.installments}</Styled.Installments>
                  <Styled.BoxPrice>
                    <Styled.Price>{plan.price?.split(',')[0]}</Styled.Price>
                    <span> ,{plan.price?.split(',')[1]}</span>
                  </Styled.BoxPrice>
                  <Styled.DescriptionPrice>{plan.descriptionPrice}</Styled.DescriptionPrice>
                </Styled.ContainerPrice>
              </Styled.ContentPlan>
              <Styled.ListOfBenefits>
                {plan.benefits.map((benefit) => {
                  return (
                    <Styled.Benefit key={benefit.id} className={benefit.className}>
                      {benefit.description}
                    </Styled.Benefit>
                  );
                })}
              </Styled.ListOfBenefits>
            </Styled.BoxPlan>
          );
        })}
      </Styled.BoxPlans>
    </Styled.Container>
  );
};
