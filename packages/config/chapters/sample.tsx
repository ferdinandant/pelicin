import React from 'react';
import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Sample Article',
        path: '/sample/article',
      },
    ],
  },
  {
    chapter: <>Feature Showcase</>,
    children: [
      {
        title: 'With math',
        path: '/sample/math',
      },
      {
        title: 'With code',
        path: '/sample/code',
      },
    ],
  },
];

export default chapters;
