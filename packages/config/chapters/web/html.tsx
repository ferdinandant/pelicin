import React from 'react';
import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/web/html',
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
        path: '/web/html/tags-head/html-tags-metadata'
      },
    ]
  },
  {
    chapter: <>HTML Tags in <code>&lt;body&gt;</code></>,
    children: [
      {
        title: 'HTML Tags: The Basics',
        path: '/web/html/tags-body/html-tags-basics'
      },
      {
        title: 'HTML Tags: Lists',
        path: '/web/html/tags-body/html-tags-lists'
      },
      {
        title: 'HTML Tags: Tables',
        path: '/web/html/tags-body/html-tags-tables'
      },
      {
        title: 'HTML Tags: Media',
        path: '/web/html/tags-body/html-tags-media'
      },
      {
        title: 'HTML Tags: Forms',
        path: '/web/html/tags-body/html-tags-forms'
      },
      {
        title: 'HTML Tags: Scripting',
        path: '/web/html/tags-body/html-tags-scripting'
      },
      {
        title: 'HTML Tags: Sectioning',
        path: '/web/html/tags-body/html-tags-sectioning'
      },
      {
        title: 'HTML Tags: Canvas and SVG',
        path: '/web/html/tags-body/html-tags-canvas-svg'
      },
      {
        title: 'HTML Tags: Others – Block',
        path: '/web/html/tags-body/html-tags-others-block'
      },
      {
        title: 'HTML Tags: Others – Inline',
        path: '/web/html/tags-body/html-tags-others-inline'
      },
    ]
  },
  {
    chapter: 'HTML Attributes',
    children: [
      {
        title: 'Global HTML Attributes',
        path: '/web/html/attributes/html-attributes-global'
      },
      {
        title: 'ARIA HTML Attributes',
        path: '/web/html/attributes/html-attributes-aria'
      },
      {
        title: 'Explanation to Recurring HTML Attributes',
        path: '/web/html/attributes/html-attributes-recurring'
      },
    ]
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'HTML entities',
        path: '/web/html/others/html-entities'
      },
    ]
  }
];

export default chapters;
