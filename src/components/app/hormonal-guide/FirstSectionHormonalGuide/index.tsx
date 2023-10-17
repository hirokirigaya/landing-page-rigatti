'use client';

import { BlackCardWithTopRightIcon } from '@/components/reusables/BlackCardWithTopRightIcon';
import { IWantToBeAHormonePrescriberButton } from '../Buttons/IWantToBeAHormonePrescriberButton';
import { TalkToDrRigatttiWhatsappButton } from '../Buttons/TalkToDrRigatttiWhatsappButton';
import * as Styled from './styles';

export const FirstSectionHormonalGuide = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ImageBackground
        src='/images/hormonal_guide/first_section/dr_rigatti.png'
        alt='Dr. Rigatti'
        title='Dr. Rigatti'
        draggable={false}
      />
      <Styled.BoxContent>
        <Styled.BoxLineAndInstagramIcon>
          <Styled.Line />
          <Styled.IconButton>
            <Styled.IconInstagram
              src='/icons/instagram_brown_icon.svg'
              alt='icone instragram'
              title='icone instagram'
            />
          </Styled.IconButton>
        </Styled.BoxLineAndInstagramIcon>
        <Styled.BoxTextAndButtons>
          <Styled.BoxTitleAndSubtitle>
            <Styled.SubTitle>
              Aprenda com quem é <span>referência na área hormonal.</span>
            </Styled.SubTitle>
            <Styled.BoxTitleAndBoxGlassEffect>
              <Styled.Title>
                Você pode <span className='white-color'>ter pacientes</span> ou pode{' '}
                <span>transformar vidas.</span>
              </Styled.Title>
              <Styled.BoxGlassEffect>
                <Styled.BoxContentGlassEffect>
                  <Styled.TypographyBoxGlassEffect borderBottom>
                    Para você que fez vários cursos e ainda tem dúvidas.
                  </Styled.TypographyBoxGlassEffect>
                  <Styled.TypographyBoxGlassEffect borderBottom>
                    Para você que consulta seus colegas e não acha respostas.
                  </Styled.TypographyBoxGlassEffect>
                  <Styled.TypographyBoxGlassEffect>
                    Nenhum outro curso é tão completo, nenhuma outra mentoria será necessária.
                  </Styled.TypographyBoxGlassEffect>
                </Styled.BoxContentGlassEffect>
                <Styled.EmblemRigattiIcon
                  src='/rigatti_emblem_white.svg'
                  alt='Emblema Dr. Rigatti'
                  title='Emblema Dr. Rigatti'
                />
              </Styled.BoxGlassEffect>
            </Styled.BoxTitleAndBoxGlassEffect>
          </Styled.BoxTitleAndSubtitle>
          <Styled.Paragraph>
            <span>
              Desmitifique os hormônios e desperte o valor real, torne-se um expert em reposição
              hormonal.
            </span>{' '}
            O conhecimento que você precisa com a experiência do Dr. Rigatti,{' '}
            <span>
              você aprenderá a ler os sintomas x hormônio e simplificar o diagnóstico x tratamento
              com segurança.
            </span>
          </Styled.Paragraph>
          <Styled.BoxButtons>
            <IWantToBeAHormonePrescriberButton />
            <TalkToDrRigatttiWhatsappButton />
          </Styled.BoxButtons>
          <Styled.BoxCards>
            <BlackCardWithTopRightIcon
              icon={
                <Styled.IconCard
                  src='/icons/ionic_medical_icon.svg'
                  alt='Icone de Asterisco'
                  title='Icone de Asterisco'
                  className='icon-card-1'
                />
              }
              titleCard={
                <Styled.TitleCard className='title-card-1'>
                  Indicações e <span> tipos de hormônios</span>
                </Styled.TitleCard>
              }
              desc={
                <Styled.DescriptionCard className='desc-card-1'>
                  Estrogênio, progesterona, testosterona, hormônio de crescimento e outros,
                  abordamos todos os tipos de reposição hormonal e como identificar o melhor
                  protocolo.
                </Styled.DescriptionCard>
              }
            />
            <BlackCardWithTopRightIcon
              icon={
                <Styled.IconCard
                  src='/icons/expand_arrows_icon.svg'
                  alt='Icone de Expandir'
                  title='Icone de Expandir'
                  className='icon-card-2'
                />
              }
              titleCard={
                <Styled.TitleCard className='title-card-2'>
                  Aprenda sobre as <br />
                  <span> formas de administração</span>
                </Styled.TitleCard>
              }
              desc={
                <Styled.DescriptionCard className='desc-card-2'>
                  Existem várias formas de administração de hormônios, como via oral, transdérmica,
                  intravenosa e subcutânea. Como escolher a melhor forma para a reposição hormonal?
                </Styled.DescriptionCard>
              }
            />
            <BlackCardWithTopRightIcon
              className='card-3'
              icon={
                <Styled.IconCard
                  src='/icons/life_ring_icon.svg'
                  alt='Icone de Anel'
                  title='Icone de Anel'
                  className='icon-card-3'
                />
              }
              titleCard={
                <Styled.TitleCard className='title-card-3'>
                  Conheça todos os
                  <span> riscos e benefícios</span>
                </Styled.TitleCard>
              }
              desc={
                <Styled.DescriptionCard className='desc-card-3'>
                  Redução dos sintomas da menopausa, melhora da função sexual e aumento da densidade
                  óssea. Entenda todos os aspectos e aprenda como definir o melhor protocolo da
                  reposição hormonal.
                </Styled.DescriptionCard>
              }
            />
          </Styled.BoxCards>
        </Styled.BoxTextAndButtons>
      </Styled.BoxContent>
    </Styled.Container>
  );
};
