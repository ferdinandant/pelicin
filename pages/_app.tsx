import Head from 'next/head';
import Header from 'global/Header';
import 'global/styles/reset.css';
import 'global/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link href="https://fonts.googleapis.com/css2?family=Muli&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <div id="mainContainer">
        <Component {...pageProps} />
      </div>

      <style jsx>{`
        #mainContainer {
          display: flex;
        }
      `}</style>
    </>
  );
}

export default MyApp;
