'use client';

import ColorfulCard from '@/components/reusables/ColorfulCard';
import Image from 'next/image';
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
            style={{ marginLeft: '6px' }}
            className='card'
          />
        </Styled.BoxCards>
        <Styled.BoxButtons>
          <Styled.ContactButton className='button-whatsapp' title='Tirar dúvidas pelo WhatsApp'>
            <Image
              src={'/icons/whatsapp_white_icon.svg'}
              alt='icone whatsapp'
              title='icone whatsapp'
              width={22}
              height={22}
            />
            <span>Tirar dúvidas pelo WhatsApp</span>
          </Styled.ContactButton>
          <Styled.ContactButton
            className='button-schedule-appointment'
            variant={'secondary'}
            title='Quero agendar uma consulta'
          >
            <Image
              src={'/icons/material_bookmark_border_icon.svg'}
              alt='icone marca página'
              title='icone marca página'
              width={17}
              height={21}
            />
            <span>Quero agendar uma consulta</span>
          </Styled.ContactButton>
          <Styled.LinkStyled href='/' title='Acessar instagram da clínica Rigatti'>
            <Image
              src='/icons/instagram_icon.svg'
              alt='Icone Instagram'
              title='Icone do Instagram'
              width={26}
              height={26}
            />
          </Styled.LinkStyled>
        </Styled.BoxButtons>
      </Styled.Content>
    </Styled.Container>
  );
};

export default FirstSectionHome;
