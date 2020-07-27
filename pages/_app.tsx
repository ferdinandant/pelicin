import Head from 'next/head';

import { LayoutRenderer } from 'layout';
import { TopicConfigProvider } from 'topic';
import 'styles/reset.css';
import 'styles/global.css';
import 'styles/article.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <TopicConfigProvider topic="css">
        <LayoutRenderer>
          <Component {...pageProps} />
        </LayoutRenderer>
      </TopicConfigProvider>
    </>
  );
}

export default MyApp;
