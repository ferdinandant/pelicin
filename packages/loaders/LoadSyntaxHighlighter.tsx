import React from 'react';
import Head from 'next/head';

export default function LoadSyntaxHighlighter() {
  return (
    <Head>
      <>
        <link rel="stylesheet" href="/lib/prism/prism.css" />
        <script defer src="/lib/prism/prism.js" />
      </>
    </Head>
  );
}
