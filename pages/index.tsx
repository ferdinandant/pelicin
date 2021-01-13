import React from 'react';

import { TopBar, Hero, ContentIndex, SiteDescription, SiteDisclaimer } from '@pelicin/layout';
import { SampleGroup } from '@pelicin/config';

// ================================================================================
// MAIN
// ================================================================================

export default function IndexPage() {
  return (
    <>
      <TopBar />
      <Hero />
      <SiteDescription />
      <SiteDisclaimer />
      <ContentIndex groups={[SampleGroup]} />
    </>
  );
}
