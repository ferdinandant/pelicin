import React from 'react';

import { TopBar, Hero, ContentIndex } from '@pelicin/layout';
import { SampleGroup } from '@pelicin/config';

// ================================================================================
// MAIN
// ================================================================================

export default function IndexPage() {
  return (
    <>
      <TopBar />
      <Hero />
      <ContentIndex groups={[SampleGroup]} />
    </>
  );
}
