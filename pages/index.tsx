import Head from 'next/head'
import CommonHead from '../components/CommonHead';
import Header from '../components/Header';
import Inner from '../components/Inner';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const data = Data.data;
const mainTitle = data.main.title;
const mainText = data.main.text;
const aboutTitle = data.about.title;
const aboutText = data.about.text;


export default function Home() {
  return (
    <>
      <Head>
        <title>{ mainTitle }</title>
        <meta name="description" content={ mainTitle } />
        <meta property="og:title" content={ mainText } />
        <meta property="og:description" content={ mainText } />
        <CommonHead />
      </Head>

      <Header />
      <main>
        <h1>{ mainTitle }</h1>
        <p dangerouslySetInnerHTML={{ __html: mainText }}></p>
        <Inner />
      </main>
      <Footer />
    </>
  )
}
