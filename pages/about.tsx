import Head from 'next/head'
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';


const aboutTitle = 'このアプリについて';
const aboutText = 'アプリの概要をここに書く。';


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ aboutTitle }</title>
            <meta name="description" content={ aboutTitle } />
            <meta property="og:title" content={ aboutText } />
            <meta property="og:description" content={ aboutText } />
        </Head>

        <Header />
        <main>
            <h1>{ aboutTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: aboutText }}></p>
            <section>
                <h2>使い方</h2>
                <p>アプリの説明説明説明説明説明説明説明説明</p>
            </section>
            <Profile />
        </main>
        <Footer />
        </>
    );
}

export default About;