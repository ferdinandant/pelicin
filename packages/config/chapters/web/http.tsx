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
    chapter: 'Uncategorized Headers',
    children: [
      {
        title: 'Cookie',
        path: '/web/http/headers/cookie',
      },
      {
        title: 'Caching',
        path: '/web/http/headers/caching',
      },
    ],
  },
  {
    chapter: 'Security Headers',
    children: [
      {
        title: 'Authentication',
        path: '/web/http/security-headers/authentication',
      },
      {
        title: 'Cross-Origin Resource Sharing (CORS)',
        path: '/web/http/security-headers/cors',
      },
      {
        title: 'Content Security Policy (CSP)',
        path: '/web/http/security-headers/csp',
      },
      {
        title: 'HTTP Strict-Transport-Security (HSTS)',
        path: '/web/http/security-headers/hsts',
      },
    ],
  },
]

export default chapters;
