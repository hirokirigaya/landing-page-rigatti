import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  gap: 114px;
  justify-content: center;
  align-items: center;
  padding: 0 4.166666666666667vw;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding: 0;
    padding-left: 0.5208333333333334vw;
  }
`;

export const ContainerVideos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    flex-direction: row;
    gap: 0.4166666666666667vw;
  }
`;

export const Video = styled.video`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.secondary};
  height: 345px;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    height: 17.96875vw;
    max-width: 28.854166666666668vw;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-family: ${({ theme }) => theme.fontFamily.playfair};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  line-height: 46px;
  font-style: italic;
  letter-spacing: -0.7px;
  max-width: 1136px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    font-size: ${({ theme }) => theme.fontSizesVW['4xl']};
    line-height: 2.3958333333333335vw;
    letter-spacing: -0.036458333333333336vw;
    max-width: 59.166666666666664vw;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
    text-decoration-thickness: 1px;

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      text-decoration-thickness: 0.052083333333333336vw;
    }
  }
`;
