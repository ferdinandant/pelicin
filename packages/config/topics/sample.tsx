import React from 'react';
import { Latex } from '@pelicin/components';

// ================================================================================
// META
// ================================================================================

/*
 * `mainColor` is picked from https://github.com/ozh/github-colors
 * accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
 */
const meta = {
  topicTitle: 'Sample',
  topicDescription: 'This is just for testing',
  mainColor: '#65737e',
  accentColor: '#5992a0',
  basePath: '/sample',
};

// ================================================================================
// CHAPTERS
// ================================================================================

const chapters = [
  {
    chapter: null,
    children: [
      {
        title: (
          <span>
            Ini hanyalah <Latex>{String.raw`\mathrm{Ujian}`}</Latex>
          </span>
        ),
        path: '/test/123',
      },
    ],
  },
  {
    chapter: <>Selalu berlaku sopan di jalan, ya!</>,
    children: [
      {
        title: <>Saya hanya mau ini dan itu :(</>,
        path: '/sample/test',
      },
      {
        title: 'Duh, yang ini juga mau',
        path: '/sample/other',
      },
      {
        title: 'Yang ini juga :<',
        path: '/sample/other',
      },
    ],
  },
  {
    chapter: 'Lorem ipsum',
    children: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        path: '/sample/other',
      },
      {
        title: 'Donec odio. Quisque volutpat mattis eros',
        path: '/sample/other',
      },
      {
        title:
          'Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede',
        path: '/sample/other',
      },
    ],
  },
];

// ================================================================================
// EXPORTS
// ================================================================================

export default {
  ...meta,
  chapters,
};
