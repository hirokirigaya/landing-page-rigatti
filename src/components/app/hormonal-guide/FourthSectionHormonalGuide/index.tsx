'use client';

import * as Styled from './styles';
import { listOfContents } from './MOCK';
import { IWantToBeAHormonePrescriberButton } from '../Buttons/IWantToBeAHormonePrescriberButton';
import { TalkToDrRigatttiWhatsappButton } from '../Buttons/TalkToDrRigatttiWhatsappButton';
import { DarkCard } from './components/DarkCard';

export const FourthSectionHormonalGuide = (): JSX.Element => {
  const list0to4 = listOfContents.slice(0, 4);
  const list4to8 = listOfContents.slice(4, 8);
  const list8to12 = listOfContents.slice(8, 12);
  const list12to16 = listOfContents.slice(12, 16);
  return (
    <Styled.Container>
      <Styled.ManOnStoneImage
        src='/images/hormonal_guide/fourth_section/man_on_stone_with_lantern.png'
        alt='Homem em pé sobre uma pedra com uma lanterna na mão'
        title='Homem em pé sobre uma pedra com uma lanterna na mão'
      />
      <Styled.DrRigattiImage
        src='/images/hormonal_guide/fourth_section/rigatti_doctor_with_hands_in_suit.png'
        alt='Doutor Rigatti'
        title='Doutor Rigatti'
      />
      <Styled.DrRigattiLogoCircularImage
        src='/logo_dr_rigatti_circular.svg'
        alt='Logo Dr. Rigatti'
        title='Logo Dr. Rigatti'
      />
      <Styled.LeftContent>
        <Styled.BoxTitleSaveTenYearsOfStudyAndDesc>
          <Styled.TitleSaveTenYearsOfStudy>
            <span> Economize 10 anos de estudo!</span> O único curso que você precisa sobre{' '}
            <span>hormônios.</span>
          </Styled.TitleSaveTenYearsOfStudy>
          <Styled.DescriptionSaveTenYearsOfStudy>
            <span>
              Tenha mais indicações com mais paciências felizes e satisfeitos com seus resultados.
            </span>{' '}
            Aprenda a identificar deficiências e sintomas, saiba como lidar com os hormônios e seus
            efeitos. <span>Este é o único curto que você precisa</span> para aprender a resolver
            complicações, com a{' '}
            <span>segurança e experiência de quem já está a mais de 10 anos na área.</span>
          </Styled.DescriptionSaveTenYearsOfStudy>
        </Styled.BoxTitleSaveTenYearsOfStudyAndDesc>
        <Styled.BoxButtons>
          <IWantToBeAHormonePrescriberButton />
          <TalkToDrRigatttiWhatsappButton />
        </Styled.BoxButtons>
        <Styled.BoxRigattiAndButton>
          <Styled.BoxRigatti>
            <Styled.BoxImageRigatti>
              <Styled.RigattiImage
                src='/images/hormonal_guide/fourth_section/doctor_rigatti_laughing.png'
                alt='Doutor Rigatti'
                title='Doutor Rigatti'
                draggable={false}
              />
              <Styled.RigattiMethodImage
                src='/rigatti_method_circular.svg'
                alt='Método Rigatti'
                title='Método Rigatti'
              />
            </Styled.BoxImageRigatti>
            <Styled.BoxContentRigatti>
              <Styled.TitleRigatti>Lorem ipsum dolor sit amet.</Styled.TitleRigatti>
              <Styled.BoxDescriptionRigatti>
                <Styled.DescriptionRigatti>
                  Mauris iaculis metus dictum orci suscipit, eget interdum leo vulputate.
                </Styled.DescriptionRigatti>
                <Styled.DescriptionRigatti>
                  Duis posuere erat eu Leo malesuada, at scelerisque justo faucibus. Duis sit amet
                  enim justo. In a enim ut ex porta consectetur. Vivamus tempus viverra luctus.
                  Phasellus efficitur metus eros.
                </Styled.DescriptionRigatti>
              </Styled.BoxDescriptionRigatti>
            </Styled.BoxContentRigatti>
          </Styled.BoxRigatti>
          <TalkToDrRigatttiWhatsappButton />
        </Styled.BoxRigattiAndButton>
      </Styled.LeftContent>
      <Styled.RightContent>
        <Styled.BoxGlassEffect>
          <Styled.TitleBoxGlassEffect>
            O que preparamos para você neste curso para médicos sobre hormônios.
          </Styled.TitleBoxGlassEffect>
          <Styled.DescriptionGlassEffect>
            Entendimento simples, descomplicado, didático. <span>Prescreva sem medo,</span> com
            segurança e apoio do Dr. Rigatti.
          </Styled.DescriptionGlassEffect>
        </Styled.BoxGlassEffect>
        <Styled.ContainerCards>
          <Styled.BoxCardsDesktop>
            {list0to4.map((item, index) => {
              const light = index % 2 !== 0;
              return (
                <DarkCard
                  className={`item-${item.id}`}
                  key={item.id}
                  number={String(item.id)}
                  title={item.title}
                  items={item.items}
                  variant={light ? 'light' : 'dark'}
                  internalClassName={`internal-item-${item.id}`}
                />
              );
            })}
          </Styled.BoxCardsDesktop>
          <Styled.BoxCardsDesktop>
            {list4to8.map((item, index) => {
              const light = index % 2 === 0;
              return (
                <DarkCard
                  className={`item-${item.id}`}
                  key={item.id}
                  number={String(item.id)}
                  title={item.title}
                  items={item.items}
                  variant={light ? 'light' : 'dark'}
                  internalClassName={`internal-item-${item.id}`}
                />
              );
            })}
          </Styled.BoxCardsDesktop>
          <Styled.BoxCardsDesktop>
            {list8to12.map((item, index) => {
              const light = index % 2 !== 0;
              return (
                <DarkCard
                  className={`item-${item.id}`}
                  key={item.id}
                  number={String(item.id)}
                  title={item.title}
                  items={item.items}
                  variant={light ? 'light' : 'dark'}
                  internalClassName={`internal-item-${item.id}`}
                />
              );
            })}
          </Styled.BoxCardsDesktop>
          <Styled.BoxCardsDesktop className='last-list'>
            {list12to16.map((item, index) => {
              const light = index % 2 === 0;
              return (
                <DarkCard
                  className={`item-${item.id}`}
                  key={item.id}
                  number={String(item.id)}
                  title={item.title}
                  items={item.items}
                  variant={light ? 'light' : 'dark'}
                  internalClassName={`internal-item-${item.id}`}
                />
              );
            })}
          </Styled.BoxCardsDesktop>
        </Styled.ContainerCards>
      </Styled.RightContent>
    </Styled.Container>
  );
};
