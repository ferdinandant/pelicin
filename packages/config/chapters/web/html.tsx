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
    chapter: 'HTML Reference',
    children: [
      {
        title: 'List of HTML Tags',
        path: '/web/html/list-html-tags'
      }
    ]
  }
];

export default chapters;
