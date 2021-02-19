import React from 'react';
import getConfig from 'next/config';

import { TopBar, Hero, ContentIndex, Footer } from '@pelicin/layout';
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
      <ContentIndex groups={shownGroups} />
      <Footer />
    </>
  );
}
