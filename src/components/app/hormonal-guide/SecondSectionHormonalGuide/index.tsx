'use client';

import * as Styled from './styles';

export const SecondSectionHormonalGuide = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.RigattiEmblem
        src='/rigatti_emblem_brown_large.svg'
        alt='Emblema da Rigatti'
        title='Emblema da Rigatti'
      />
      <Styled.BoxLeft>
        <Styled.DoctorRigattiCircularLogo
          src='/logo_dr_rigatti_circular.svg'
          alt='Logo Dr. Rigatti'
          title='Logo Dr. Rigatti'
        />
        <Styled.FatherWithChildren
          src='/images/hormonal_guide/second_section/father_with_children.png'
          alt='Pai com crianças'
          title='Pai com crianças'
        />
        <Styled.BoxGlassEffect>
          <Styled.Quotes>“</Styled.Quotes>
          <Styled.ContentBoxGlassEffect>
            <Styled.DescriptionBoxGlassEffect>
              Sed tincidunt viverra accumsan. Curabitur blandit sem non elit gravida interdum. Cras
              a elementum risus. Nulla facilisi. Aliquam erat volutpat
            </Styled.DescriptionBoxGlassEffect>
            <Styled.AuthorBoxGlassEffect>- lorem ipsum dolor</Styled.AuthorBoxGlassEffect>
          </Styled.ContentBoxGlassEffect>
        </Styled.BoxGlassEffect>
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <Styled.BoxSubtitleAndTitle>
          <Styled.Subtitle>
            “Caminho com você do básico ao avançado e tiro todas as suas dúvidas.” - Dr. Rigatti.
          </Styled.Subtitle>
          <Styled.Title>
            Aprenda tudo sobre <span>prescrição hormonal</span> com quem tem autoridade.
          </Styled.Title>
        </Styled.BoxSubtitleAndTitle>
        <Styled.BoxDescription>
          <Styled.Description className='brown'>
            São mais de 10 anos de experiência, mais de 10 mil pacientes, escritor, palestrante,
            pesquisador. Toda a experiência e conhecimento do Dr. Rigatti está sendo oferecida neste
            curso.
          </Styled.Description>
          <Styled.Description>
            Do básico ao avançado, neste curso desmistificamos o tratamento hormonal, ensinando de
            forma simples e didática como prescrever, interpretar e diagnosticar de forma rápida os
            sintomas x hormônio.
          </Styled.Description>
        </Styled.BoxDescription>
        <Styled.BoxDiamondIcons>
          <Styled.DiamondIcon
            src='/images/hormonal_guide/second_section/one_hundred_and_fifty_hours.svg'
            alt='150 horas de conteúdo'
            title='150 horas de conteúdo'
          />
          <Styled.DiamondIcon
            src='/images/hormonal_guide/second_section/forty_five_classes.svg'
            alt='45 aulas'
            title='45 aulas'
          />
          <Styled.DiamondIcon
            src='/images/hormonal_guide/second_section/twelve_modules.svg'
            alt='12 módulos'
            title='12 módulos'
          />
          <Styled.DiamondIcon
            src='/images/hormonal_guide/second_section/four_books.svg'
            alt='4 livros'
            title='4 livros'
          />
        </Styled.BoxDiamondIcons>
      </Styled.BoxRight>
    </Styled.Container>
  );
};
