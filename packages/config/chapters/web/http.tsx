import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/web/http',
      },
      {
        title: 'HTTP Status Codes',
        path: '/web/http/status-codes',
      },
      {
        title: 'HTTP Methods',
        path: '/web/http/methods',
      },
    ],
  },
  {
    chapter: 'Headers',
    children: [
      {
        title: 'Authentication',
        path: '/web/http/headers/authentication',
      },
      {
        title: 'Cross-Origin Resource Sharing',
        path: '/web/http/headers/cors',
      },
    ],
  },
]

export default chapters;
