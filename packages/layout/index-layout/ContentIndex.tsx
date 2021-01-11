import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { INDEX_DOM_ID } from '@pelicin/layout';

export default function ContentIndex() {
  return (
    <ScrollableAnchor id={INDEX_DOM_ID}>
      <div> Hello World </div>
    </ScrollableAnchor>
  );
}
