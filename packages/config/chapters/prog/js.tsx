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
        title: 'Primitive Types',
        path: '/prog/js/basics/types-primitive'
      },
      {
        title: 'Object Types',
        path: '/prog/js/basics/types-object'
      }
    ],
  }
]

export default chapters;
