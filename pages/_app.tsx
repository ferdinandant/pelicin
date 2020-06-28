import Head from 'next/head';

import { Header } from 'global/layout';
import { TopicConfigProvider } from 'global/topic';
import 'global/styles/reset.css';
import 'global/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link href="https://fonts.googleapis.com/css2?family=Muli&display=swap" rel="stylesheet" />
      </Head>

      <TopicConfigProvider topic="css">
        <Header />
        <div id="mainContainer">
          <Component {...pageProps} />
        </div>
      </TopicConfigProvider>

      <style jsx>{`
        #mainContainer {
          display: flex;
        }
      `}</style>
    </>
  );
}

export default MyApp;
