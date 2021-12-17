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
        title: 'Primitive Values',
        path: '/prog/js/basics/values-primitive'
      },
      {
        title: 'Object Values',
        path: '/prog/js/basics/values-object'
      }
    ],
  }
]

export default chapters;
