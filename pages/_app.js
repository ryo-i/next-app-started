import { createGlobalStyle } from 'styled-components';
import cssVariables from '../styles/variables.json';
// import '../styles/globals.css'

const variable = cssVariables.variable;


// Style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: ${variable.textSize};
    color: ${variable.textColor};
    *, *:before, *:after {
        box-sizing: border-box;
    }
    a {
        color: ${variable.baseColor};
        &:hover {
          opacity: 0.8;
        }
    }
    section {
      margin: 0 0 20px;
    }
    h1, h2, p, figure, ul, table {
      margin: 0 0 10px;
    }
    h1, h2 {
      line-height: 1.25;
    }
    p {
      line-height: 1.75;
    }
  }
`;


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
