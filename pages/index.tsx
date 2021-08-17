import React from 'react';
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
