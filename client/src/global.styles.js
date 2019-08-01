import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { 
  box-sizing: border-box;
}

body {
  font-family: 'Raleway';
  font-size: 22px;
  padding: 20px 40px;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}

`;
