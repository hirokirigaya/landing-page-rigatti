import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body,
  button,
  input,
  textarea {
    font-family: var(--font-poppins), 'Arial', sans-serif;
    font-size: 1rem;
  }

  body {
    background: ${({ theme }) => theme.colors.background.primary};
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @keyframes navLinkAnimation {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes navLinkAnimationOut {
    from {
      opacity: 1;
      transform: translateX(0px);
    }
    to {
      opacity: 0;
      transform: translateX(-50px);
    }
  }
`;

export default GlobalStyles;
