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
        title: 'Variables and Values',
        path: '/prog/js/basics/variables-values'
      }
    ],
  }
]

export default chapters;
