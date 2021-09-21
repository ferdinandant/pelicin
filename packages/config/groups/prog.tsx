import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Programming',
  groupHash: 'prog',
  sections: [
    {
      topics: [
        {
          title: 'JavaScript',
          path: '/prog/js',
          description: <>JavaScript: The Definitive Guide, 7th Edition (O’Reilly)</>,
        },
      ],
    },
  ],
};

export default group;
