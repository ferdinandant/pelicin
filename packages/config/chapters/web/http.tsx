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
        title: 'Redirection',
        path: '/web/http/headers/redirection',
      },
      {
        title: 'Metadata',
        path: '/web/http/headers/metadata',
      },
      {
        title: 'Proxy',
        path: '/web/http/headers/proxy',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Negotiation Headers',
    children: [
      {
        title: 'Caching',
        path: '/web/http/negotiation-headers/caching',
      },
      {
        title: 'Range Requests',
        path: '/web/http/negotiation-headers/range-requests',
      },
      {
        title: 'Conditional Requests',
        path: '/web/http/negotiation-headers/conditional-requests',
      },      
      {
        title: 'Content Negotiation',
        path: '/web/http/negotiation-headers/content-negotiation',
      },
      {
        title: 'Referrer',
        path: '/web/http/negotiation-headers/referrer',
        badge: 'TODO'
      },
      {
        title: 'Digest',
        path: '/web/http/negotiation-headers/digest',
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
