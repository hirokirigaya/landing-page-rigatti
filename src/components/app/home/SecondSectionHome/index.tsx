'use client';

import ScheduleAppointmentButton from '@/components/reusables/Button/ContactButtons/ScheduleAppointmentButton';
import WhatsappButton from '@/components/reusables/Button/ContactButtons/WhatsappButton';
import * as Styled from './styles';

const SecondSectionHome = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.BoxLeft>
        <Styled.Image
          src='/logo_rigatti_circular.svg'
          alt='logo escrito clínica rigatti'
          title='Logo clínica Rigatti'
          className='logo'
        />
        <Styled.ImageDiv
          src='/images/home/second_section/womem_smiling.png'
          title='Mulher sorrindo'
          className='womem-smiling-1'
        />
        <Styled.ImageDiv
          src='/images/home/second_section/child_smiling.png'
          title='Criança sorrindo'
          className='child-smiling'
        />
        <Styled.ImageDiv
          src='/images/home/second_section/womem_smiling_2.png'
          title='Mulher sorrindo'
          className='womem-smiling-2'
        />
        <Styled.StyledCircle />
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <Styled.Title>
          Clínica Rigatti é a <span>melhor opção em Reposição Hormonal e Soroterapia</span> em
          Balneário Camboriú, SC.
        </Styled.Title>
        <Styled.BoxParagraph>
          <Styled.Paragraph>
            Contamos com um time de médicos e nutricionistas dedicados e altamente treinados para
            ajudar você a alcançar seus objetivos. Seja através da reposição hormonal, reeducação
            alimentar, realização de exames, bioimpedância eletrônica ou soroterapia. Estamos
            prontos para mudar a sua vida e atingir todos os seus sonhos.
          </Styled.Paragraph>
          <Styled.SecondParagraph>
            São mais de 10.000 vidas mudadas. Faça parte da sua mudança e construa sua vida com mais
            saúde e disposição.
          </Styled.SecondParagraph>
        </Styled.BoxParagraph>
        <Styled.BoxButtons>
          <WhatsappButton />
          <ScheduleAppointmentButton />
        </Styled.BoxButtons>
      </Styled.BoxRight>
    </Styled.Container>
  );
};

export default SecondSectionHome;
