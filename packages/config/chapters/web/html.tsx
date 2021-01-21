import React from 'react';
import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/web/html/introduction',
      },
      {
        title: 'Where to Develop',
        path: '/web/html/where-to-develop',
      },
    ],
  },
  {
    chapter: <>HTML Tags in <code>&lt;head&gt;</code></>,
    children: [
      {
        title: 'HTML Tags: Metadata',
        path: '/web/html/html-tags-metadata'
      },
    ]
  },
  {
    chapter: <>HTML Tags in <code>&lt;body&gt;</code></>,
    children: [
      {
        title: 'HTML Tags: the Basics',
        path: '/web/html/html-tags-basics'
      },
    ]
  },
  {
    chapter: 'HTML Attributes',
    children: [
      {
        title: 'Recurring HTML Attributes',
        path: '/web/html/html-attributes-recurring'
      }
    ]
  }
];

export default chapters;
