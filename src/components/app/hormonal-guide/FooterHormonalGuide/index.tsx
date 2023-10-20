'use client';

import { IWantToBeAHormonePrescriberButton } from '../Buttons/IWantToBeAHormonePrescriberButton';
import { TalkToDrRigatttiWhatsappButton } from '../Buttons/TalkToDrRigatttiWhatsappButton';
import * as Styled from './styles';

export const FooterHormonalGuide = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.BoxTitleAndButtons>
        <Styled.Title>
          Ensino a você dar seu próximo passo em sua carreira médica,{' '}
          <span>fidelizar mais pacientes e ter mais indicações.</span> Vamos?
        </Styled.Title>
        <Styled.BoxButtons>
          <IWantToBeAHormonePrescriberButton />
          <TalkToDrRigatttiWhatsappButton />
        </Styled.BoxButtons>
      </Styled.BoxTitleAndButtons>
      <Styled.Logo
        src='/rigatti_logo_with_emblem.svg'
        alt='Logo da Clínica Dr. Rigatti'
        title='Logo da Clínica Dr. Rigatti'
      />
    </Styled.Container>
  );
};
