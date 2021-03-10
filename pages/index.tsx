import React from 'react';
import getConfig from 'next/config';

import { TopBar, Hero, ContentIndex, GoogleSearch, Footer } from '@pelicin/layout';
import { SampleGroup, WebGroup } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

const groups = [WebGroup];

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
        <GoogleSearch />
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
