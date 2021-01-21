import React, { ComponentType } from 'react';
import { dirname } from 'path';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { LayoutRenderer } from '@pelicin/layout';
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

const useFontAwesomePaths = new Set([]);

const useSyntaxHighlighterPaths = new Set(['/web', '/sample']);

const useLatexPaths = new Set(['/sample']);

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

  const useFontAwesome = checkShouldEnableFeature(useFontAwesomePaths, pathPrefixes);
  const useSyntaxHighlighter = checkShouldEnableFeature(useSyntaxHighlighterPaths, pathPrefixes);
  const useLatex = checkShouldEnableFeature(useLatexPaths, pathPrefixes);

  return (
    <>
      <Head>
        <title>Pelicin!</title>
        <meta charSet="utf-8" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Font awesome */}
        {useFontAwesome && (
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
            crossOrigin="anonymous"
          />
        )}
        {/* Katex (LaTeX displayer) */}
        {useLatex && (
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
            crossOrigin="anonymous"
          />
        )}
        {/* Highlight.js (Syntax Highlighter) */}
        {useSyntaxHighlighter && (
          <link
            rel="stylesheet"
            href="https://highlightjs.org/static/demo/styles/atom-one-dark.css"
          />
        )}
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0Q02ZPV32H" />
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
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
