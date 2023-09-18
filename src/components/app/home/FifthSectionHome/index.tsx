'use client';

import ScheduleAppointmentButton from '@/components/reusables/Button/ContactButtons/ScheduleAppointmentButton';
import WhatsappButton from '@/components/reusables/Button/ContactButtons/WhatsappButton';
import * as Styled from './styles';

const symptoms = [
  'Mudanças de humor',
  'Inchaço e retenção de líquidos',
  'Compulsão',
  'Ansiedade',
  'Libido baixa',
  'Perda de cabelo em excesso',
  'Alteração no sono',
  'Falta de animo e energia',
  'Fadiga em excesso',
];

const FifthSectionHome = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.BoxIntroductionOfSymptoms>
        <Styled.Image
          src='/images/home/fifth_section/women_on_the_moutain.png'
          alt='Mulher na montanha'
          title='Mulher na montanha'
          className='women-on-the-mountain'
          draggable={false}
        />
        <Styled.Image
          src='/logo_rigatti_circular.svg'
          alt='Logo clínica Rigatti'
          title='Logo clínica Rigatti'
          className='logo'
        />
        <Styled.BoxContentIntroduction>
          <Styled.Title>
            Os principais sintomas do <span>desequilíbrio hormonal.</span>
          </Styled.Title>
          <Styled.Paragraph>
            Os sintomas do desequilíbrio hormonal podem variar dependendo do tipo de desequilíbrio e
            dos hormônios afetados. No entanto, existem algumas características que são comuns.
          </Styled.Paragraph>
          <Styled.BoxButtons>
            <WhatsappButton />
            <ScheduleAppointmentButton />
          </Styled.BoxButtons>
        </Styled.BoxContentIntroduction>
      </Styled.BoxIntroductionOfSymptoms>
      <Styled.BoxSymptoms>
        <Styled.ListSymptoms>
          {symptoms.map((symptom, index) => (
            <Styled.ItemSymptom key={index}>{symptom}</Styled.ItemSymptom>
          ))}
        </Styled.ListSymptoms>
      </Styled.BoxSymptoms>
    </Styled.Container>
  );
};

export default FifthSectionHome;
