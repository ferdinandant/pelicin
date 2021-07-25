import React, { ComponentType } from 'react';
import { dirname } from 'path';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { LayoutRenderer } from '@pelicin/layout';
import { LoadSyntaxHighlighter } from '@pelicin/loaders';
import resetStyle from '@pelicin/styles/reset.global.css';
import varsStyle from '@pelicin/styles/vars.global.css';
import mainStyle from '@pelicin/styles/main.global.css';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  Component: ComponentType;
  pageProps: any;
};

// So we don't have to repeat it in every page
const useSyntaxHighlighterPaths = new Set(['/web']);

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0Q02ZPV32H');
`;

// ================================================================================
// MAIN
// ================================================================================

function MyApp(props: Props) {
  const { Component, pageProps } = props;
  const { pathname } = useRouter();
  const pathPrefixes = getPathPrefixes(pathname);

  const isUsingSyntaxHighlighter = checkShouldEnableFeature(
    useSyntaxHighlighterPaths,
    pathPrefixes
  );

  return (
    <>
      <Head>
        <title>Pelicin!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Google programmable search */}
        <meta
          name="google-site-verification"
          content="xP70iB8r_IGzoXvPCKn3cNdSPmtfW6veyiZEteinBVk"
        />
        <script async src="https://cse.google.com/cse.js?cx=1ba7d99f6aa888f7b" />
        {/* Font awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0Q02ZPV32H" />
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
      </Head>
      {/* Highlight.js (Syntax Highlighter) */}
      {isUsingSyntaxHighlighter && <LoadSyntaxHighlighter />}

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

// ================================================================================
// HELPERS
// ================================================================================

/**
 * Generate something like ['/aa/bb', '/aa', '/']
 */
function getPathPrefixes(pathname: string) {
  const pathPrefixes = [];
  let pathPrefix = pathname;
  while ((pathPrefix = dirname(pathPrefix)) !== '/') {
    pathPrefixes.push(pathPrefix);
  }
  pathPrefixes.push('/');

  return pathPrefixes;
}

function checkShouldEnableFeature(set: Set<string>, pathPrefixes: string[]) {
  return pathPrefixes.find((item) => set.has(item));
}
