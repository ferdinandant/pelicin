import Head from 'next/head';

import { LayoutRenderer } from '@pelicin/layout';
import { TopicConfigProvider } from '@pelicin/config';
import resetStyle from '@pelicin/styles/reset.global.css';
import globalStyle from '@pelicin/styles/style.global.css';
import articleStyle from '@pelicin/styles/article.global.css';

// ================================================================================
// MAIN
// ================================================================================

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
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
