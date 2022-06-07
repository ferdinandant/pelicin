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
        <div className="tempMessageBox">
          <b>Currently migrating to MDX v2.</b> Some pages may become broken.
        </div>
        <ContentIndex groups={shownGroups} />
      </main>
      <Footer />

      <style jsx>{`
        main {
          width: 100%;
          padding: var(--spacing-xxl) var(--spacing-xl);
          padding-bottom: var(--spacing-xxl);
        }
        .tempMessageBox {
          margin: 0 auto;
          max-width: 640px;
          padding: var(--spacing-m) var(--spacing-l);
          background-color: var(--color-red-1);
          color: var(--color-red-4);
          border-radius: var(--border-radius-normal);
        }
      `}</style>
    </>
  );
}
