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
        title: 'Cookie',
        path: '/web/http/headers/cookie',
      },
      {
        title: 'Caching',
        path: '/web/http/headers/caching',
      },
      {
        title: 'Authentication',
        path: '/web/http/headers/authentication',
      },
      {
        title: 'Cross-Origin Resource Sharing (CORS)',
        path: '/web/http/headers/cors',
      },
      {
        title: 'Content Security Policy (CSP)',
        path: '/web/http/headers/csp',
      },
    ],
  },
]

export default chapters;
