'use client';

import ScheduleAppointmentButton from '@/components/reusables/Button/ContactButtons/ScheduleAppointmentButton';
import WhatsappButton from '@/components/reusables/Button/ContactButtons/WhatsappButton';
import * as Styled from './styles';

const SixthSectionHome = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Image
        src={'/images/home/sixth_section/man_on_his_back.png'}
        alt='Homem de costas com logo Rigatti no centro'
        title='Homem de costas com logo Rigatti no centro'
        className='man-on-his-back'
      />
      <Styled.BoxContentRight>
        <Styled.Title>
          Soroterapia: vantagens para a saúde, <span>rejuvenescimento e energia</span> para <br />o
          seu dia. <span>Disposição para fazer mais!</span>
        </Styled.Title>
        <Styled.BoxParagraph>
          <Styled.Paragraph>
            Hidratação profunda, nutrição da pele e do corpo, estimulo e rejuvenescimento. Mais
            energia no seu dia, mais disposição para você alcançar seus sonhos.
          </Styled.Paragraph>
          <Styled.Paragraph>
            A soroterapia permite uma abordagem personalizada, em que os soros podem ser adaptados
            às necessidades individuais de cada um. Isso significa que o tratamento pode ser
            direcionado para tratar preocupações específicas, como hidratação, reposição de
            nutrientes, clareamento ou combate ao envelhecimento.
          </Styled.Paragraph>
        </Styled.BoxParagraph>
        <Styled.BoxButtons>
          <WhatsappButton />
          <ScheduleAppointmentButton />
        </Styled.BoxButtons>
      </Styled.BoxContentRight>
    </Styled.Container>
  );
};

export default SixthSectionHome;
