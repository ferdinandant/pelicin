import React from 'react';
import getConfig from 'next/config';

import { TopBar, Hero, ContentIndex, SiteDescription, SiteDisclaimer } from '@pelicin/layout';
import { SampleGroup } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

const groups = [];

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
      <SiteDescription />
      <SiteDisclaimer />
      <ContentIndex groups={shownGroups} />
    </>
  );
}
