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
    chapter: 'HTML Tags',
    children: [
      {
        title: 'HTML Tags: Metadata',
        path: '/web/html/html-tags-metadata'
      },
      {
        title: 'Recurring HTML Attributes',
        path: '/web/html/html-attributes-recurring'
      }
    ]
  }
];

export default chapters;
