'use client';

import * as Styled from './styles';

const SeventhSectionHome = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.BoxLeft>
        <Styled.Title>
          Clinica Rigatti está em <br />
          Balneário Camboriú:
          <br /> <span>Bem-Estar e Reposição Hormonal</span>
        </Styled.Title>
        <Styled.BoxParagraph>
          <Styled.Paragraph>
            Balneário Camboriú é muito mais do que apenas uma bela cidade litorânea. É um refúgio
            que combina natureza exuberante, estilo de vida saudável e um cuidado especial com o
            bem-estar. E para quem busca equilíbrio durante a menopausa, Balneário Camboriú oferece
            uma abordagem completa, incluindo a reposição hormonal.
          </Styled.Paragraph>
          <Styled.Paragraph>
            A reposição hormonal restaura os níveis hormonais, aliviando os sintomas incômodos e
            melhorando a qualidade de vida.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Além da excelência médica da Clínica Rigatti, Balneário Camboriú proporciona um ambiente
            propício para o bem-estar. As belas praias convidam a momentos de relaxamento e conexão
            com a natureza. A cidade também oferece uma variedade de atividades físicas e opções
            saudáveis de alimentação, promovendo um estilo de vida equilibrado.
          </Styled.Paragraph>
        </Styled.BoxParagraph>
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <Styled.Image
          src={'/logo_rigatti_circular.svg'}
          alt='Logo clínica Rigatti'
          title='Logo clínica Rigatti'
          className='logo-rigatti'
        />
        <Styled.Image
          src={'/images/home/seventh_section/balneario_camboriu_1.png'}
          alt='Praia Balneário Camboriú'
          title='Praia Balneário Camboriú'
          className='balneario-camboriu beach-1'
        />
        <Styled.BoxDoubleImage>
          <Styled.Image
            src={'/images/home/seventh_section/balneario_camboriu_2.png'}
            alt='Praia Balneário Camboriú'
            title='Praia Balneário Camboriú'
            className='balneario-camboriu beach-2'
          />
          <Styled.Image
            src={'/images/home/seventh_section/balneario_camboriu_3.png'}
            alt='Praia Balneário Camboriú'
            title='Praia Balneário Camboriú'
            className='balneario-camboriu beach-3'
          />
        </Styled.BoxDoubleImage>
        <Styled.Image
          src={'/images/home/seventh_section/balneario_camboriu_4.png'}
          alt='Roda gigante Balneário Camboriú'
          title='Roda gigante Balneário Camboriú'
          className='balneario-camboriu beach-4'
        />
      </Styled.BoxRight>
    </Styled.Container>
  );
};

export default SeventhSectionHome;
