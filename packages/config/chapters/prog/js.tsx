import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/prog/js',
      },
      {
        title: 'Setup',
        path: '/prog/js/setup',
      },
    ],
  },
  {
    chapter: 'The Basics',
    children: [
      {
        title: 'Lexical Structure',
        path: '/prog/js/basics/lexical-structure'
      },
      {
        title: 'Variables',
        path: '/prog/js/basics/variables'
      },
      {
        title: 'Types and Values',
        path: '/prog/js/basics/types-values'
      },
      {
        title: 'Expressions',
        path: '/prog/js/basics/expressions'
      },
    ],
  },
  {
    chapter: 'In-Depth',
    children: [
      {
        title: 'Objects',
        path: '/prog/js/in-depth/objects',
        badge: 'TODO'
      },
      {
        title: 'Arrays',
        path: '/prog/js/in-depth/arrays',
        badge: 'TODO'
      },
      {
        title: 'Functions',
        path: '/prog/js/in-depth/functions',
        badge: 'TODO'
      },
    ],
  }
]

export default chapters;
