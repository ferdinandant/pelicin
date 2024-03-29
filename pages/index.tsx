import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

import { TopBar, Hero, ContentIndex, Footer } from '@pelicin/layout';
import { SampleGroup, groups } from '@pelicin/config';

// ================================================================================
// MAIN
// ================================================================================

export default function IndexPage() {
  const { publicRuntimeConfig } = getConfig();
  const shownGroups = publicRuntimeConfig.showSample ? [...groups, SampleGroup] : groups;

  return (
    <>
      <Head key="title">
        <title>Home - Pelicin!</title>
      </Head>

      <TopBar />
      <Hero />
      <main>
        <ContentIndex groups={shownGroups} />
      </main>
      <Footer />

      <style jsx>{`
        main {
          width: 100%;
          padding: var(--spacing-xxl) var(--spacing-xl);
          padding-bottom: var(--spacing-xxl);
        }
      `}</style>
    </>
  );
}
