import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-top: 78px;
  justify-content: center;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 600px;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-left: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
    padding-left: 1.6145833333333333vw;
    gap: 1.25vw;
    margin-top: 4.0625vw;
  }

  .feedback-card {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.senary};

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      max-width: 387px;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
      width: 20.15625vw;
      max-width: initial;
    }
  }
  .feedback-card-internal {
    &.one,
    &.four {
      padding-bottom: 31px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        padding-bottom: 1.6145833333333333vw;
      }
    }

    &.three,
    &.two {
      gap: 24px;

      @media (min-width: ${({ theme }) => theme.breakPoints['3lg']}) {
        gap: 1.25vw;
      }
    }
  }
`;
