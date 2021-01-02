import Head from 'next/head';

import { LayoutRenderer } from '@pelicin/core';
import { TopicConfigProvider } from '@pelicin/topic';
import resetStyle from '@pelicin/core/styles/reset.global.css';
import globalStyle from '@pelicin/core/styles/style.global.css';
import articleStyle from '@pelicin/core/styles/article.global.css';

console.log('globalStyle', globalStyle);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <TopicConfigProvider topic="css">
        <LayoutRenderer>
          <Component {...pageProps} />
        </LayoutRenderer>
      </TopicConfigProvider>

      <style jsx global>
        {resetStyle}
      </style>
      <style jsx global>
        {globalStyle}
      </style>
      <style jsx global>
        {articleStyle}
      </style>
    </>
  );
}

export default MyApp;
