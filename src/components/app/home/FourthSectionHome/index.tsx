'use client';

import * as Styled from './styles';

const FourthSectionHome = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ContainerVideos>
        <Styled.Video>
          <iframe
            src=''
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Styled.Video>
        <Styled.Video>
          <iframe
            src=''
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Styled.Video>
        <Styled.Video>
          <iframe
            src=''
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Styled.Video>
      </Styled.ContainerVideos>
      <Styled.Subtitle>
        O <span>equilíbrio hormonal é a sinfonia da saúde</span>, e cuidar desse ritmo com amor e
        dedicação é a chave <span>para alcançar a melhor versão de si mesmo</span>.
      </Styled.Subtitle>
    </Styled.Container>
  );
};

export default FourthSectionHome;
