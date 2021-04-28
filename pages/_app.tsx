import Head from 'next/head'
import CommonHead from '../components/CommonHead';
import { createGlobalStyle } from 'styled-components';
import { pageSize } from '../styles/mixin';
import cssVariables from '../styles/variables.json';

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
  main {
    ${pageSize}
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1.25em;
      color: ${variable.baseColor};
    }
  }
`;


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <CommonHead />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
