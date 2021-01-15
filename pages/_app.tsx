import Head from 'next/head';

import { LayoutRenderer } from '@pelicin/layout';
import resetStyle from '@pelicin/styles/reset.global.css';
import varsStyle from '@pelicin/styles/vars.global.css';
import mainStyle from '@pelicin/styles/main.global.css';

// ================================================================================
// MAIN
// ================================================================================

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Font awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
        {/* Katex (LaTeX displayer) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
      </Head>

      <LayoutRenderer>
        <Component {...pageProps} />
      </LayoutRenderer>

      <style jsx global>
        {resetStyle}
      </style>
      <style jsx global>
        {varsStyle}
      </style>
      <style jsx global>
        {mainStyle}
      </style>
    </>
  );
}

export default MyApp;
