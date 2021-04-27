import Head from 'next/head'
import CommonHead from '../components/CommonHead';
import Header from '../components/Header';
import Inner from '../components/Inner';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const headerText = Data.header.text;
const mainTitle = Data.main.title;
const mainText = Data.main.text;


export default function Home() {
  return (
    <>
      <Head>
        <title>{ headerTitle }</title>
        <meta name="description" content={ headerText } />
        <meta property="og:title" content={ headerTitle } />
        <meta property="og:description" content={ headerText } />
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
