import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Saira Semi Condensed', sans-serif;
    color: ${props => props.theme.color.textPrimaryDark};
    font-size: 1.6rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 300;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
