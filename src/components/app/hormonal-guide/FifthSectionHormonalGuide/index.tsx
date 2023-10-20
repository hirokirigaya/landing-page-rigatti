'use client';

import { IWantToBeAHormonePrescriberButton } from '../Buttons/IWantToBeAHormonePrescriberButton';
import { TalkToDrRigatttiWhatsappButton } from '../Buttons/TalkToDrRigatttiWhatsappButton';
import * as Styled from './styles';

export const FifthSectionHormonalGuide = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ManReadingBookImage 
        src='/images/hormonal_guide/fifth_section/man_sitting_reading.png'
        alt='Homem sentado lendo livro'
        title='Homem sentado lendo livro'
      />
      <Styled.LeftSide>
        <Styled.Title>
          <span>Domine a prescrição hormonal,</span> tudo que você precisa saber,{' '}
          <span>em apenas um lugar.</span>
        </Styled.Title>
        <Styled.BoxDescription>
          <Styled.Description>
            Neste curso você vai aprender tudo o que precisa saber para prescrever hormônios,
            identificar deficiências, entender a relação entre sintomas e carências, além de ter um
            canal direto com o Dr. Rigatti para debater opiniões. Este curso é para você que:
          </Styled.Description>
          <Styled.List>
            <Styled.ListItem>
              Deseja se tornar um excelente Prescritor da Reposição Hormonal.
            </Styled.ListItem>
            <Styled.ListItem>
              Deseja mudar a sua história, transformar vidas e ser reconhecido na área médica.
            </Styled.ListItem>
            <Styled.ListItem>
              Deseja levar a sua clínica a nova era da medicina com segurança e sem medo.
            </Styled.ListItem>
          </Styled.List>
        </Styled.BoxDescription>
        <Styled.BoxButtons>
          <IWantToBeAHormonePrescriberButton />
          <TalkToDrRigatttiWhatsappButton />
        </Styled.BoxButtons>
      </Styled.LeftSide>
      <Styled.RightSide>
        <Styled.DoctorRigattiLogoCircular
          src='/logo_dr_rigatti_circular.svg'
          alt='Logo Dr. Rigatti'
          title='Logo Dr. Rigatti'
        />
        <Styled.Video>
          <iframe
            src=''
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Styled.Video>
      </Styled.RightSide>
    </Styled.Container>
  );
};
