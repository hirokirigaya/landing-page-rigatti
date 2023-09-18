'use client';

import ScheduleAppointmentButton from '@/components/reusables/Button/ContactButtons/ScheduleAppointmentButton';
import WhatsappButton from '@/components/reusables/Button/ContactButtons/WhatsappButton';
import ColorfulCard from '@/components/reusables/ColorfulCard';
import * as Styled from './styles';

const FirstSectionHome = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ImageRigattiEmblem
        src='/rigatti_emblem.svg'
        alt='emblema clínica Rigatti'
        title='emblema clínica Rigatti'
      />
      <Styled.ImageWomem
        src='/women_home_page.svg'
        alt='mulher olhando para cima'
        title='mulher olhando para cima'
      />
      <Styled.Content>
        <Styled.Title>
          Reposição Hormonal, soroterapia e emagrecimento em Balneário Camboriú.
        </Styled.Title>
        <Styled.Description>
          A <span>Clínica Rigatti está em Balneário Camboriú</span> e somos{' '}
          <span>referência em reposição hormonal, emagrecimento, soroterapia e bem estar.</span>{' '}
          Nosso corpo clínico conta com médicos especializados no seu equilíbrio hormonal,
          acompanhamento por nutricionistas e tudo que você precisa para perder peso e conquistar
          uma vida mais saudável.
        </Styled.Description>
        <Styled.BoxCards>
          <ColorfulCard
            title='Como funciona a Reposição Hormonal'
            description='Com exames específicos identificamos as deficiências e traçamos estratégias para equilibrar seus hormônios, resultando em mais saúde para o seu corpo e mente.'
            className='card'
          />
          <ColorfulCard
            title='Nutricionista e Definição Corporal'
            description='Juntos alcançaremos seus objetivos de emagrecimento de forma saudável e duradoura. Sem radicalismo e sem sofrimento, te ensinamos a viver melhor com saúde.'
            descriptionColor='#818B6E'
            background='#E3F4DE'
            className='card'
          />
          <ColorfulCard
            title='Conheça a Soroterapia'
            description='Suplementação nutricional, hidratação, fortalecimento do sistema imunológico, reposição de eletrólitos, recuperação pós-exercício, melhoria da pele e aumento da energia.'
            titleColor='#69516E'
            background='#EBE8F4'
            descriptionColor='#7e6483'
            style={{ marginLeft: '0.3125vw' }}
            className='card'
          />
        </Styled.BoxCards>
        <Styled.BoxButtons>
          <WhatsappButton />
          <ScheduleAppointmentButton />
          <Styled.LinkStyled href='/' title='Acessar instagram da clínica Rigatti'>
            <Styled.IconInstagram
              src='/icons/instagram_icon.svg'
              alt='Icone Instagram'
              title='Icone do Instagram'
            />
          </Styled.LinkStyled>
        </Styled.BoxButtons>
      </Styled.Content>
    </Styled.Container>
  );
};

export default FirstSectionHome;
