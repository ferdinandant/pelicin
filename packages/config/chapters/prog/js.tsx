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
      {
        title: 'Statements',
        path: '/prog/js/basics/statements'
      },
    ],
  },
  {
    chapter: 'In-Depth',
    children: [
      {
        title: 'Objects',
        path: '/prog/js/in-depth/objects',
      },
      {
        title: 'Arrays',
        path: '/prog/js/in-depth/arrays',
      },
      {
        title: 'Functions',
        path: '/prog/js/in-depth/functions',
      },
      {
        title: 'Classes',
        path: '/prog/js/in-depth/classes',
      },
      {
        title: 'Modules',
        path: '/prog/js/in-depth/modules',
      },
      {
        title: 'Iterators',
        path: '/prog/js/in-depth/iterators',
      },
      {
        title: 'Generators',
        path: '/prog/js/in-depth/generators',
      },
    ],
  },
  {
    chapter: 'Asynchronous JS',
    children: [
      {
        title: 'Introduction',
        path: '/prog/js/async/intro',
      },
      {
        title: 'Callbacks and Timers',
        path: '/prog/js/async/callbacks-timers',
      },
      {
        title: 'Promises',
        path: '/prog/js/async/promises',
      },
      {
        title: 'Async and Await',
        path: '/prog/js/async/async-await',
      },
      {
        title: 'Asynchronous Iteration',
        path: '/prog/js/async/async-iteration',
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'Event Loop',
        path: '/prog/js/async/event-loop',
      },
      {
        title: 'Strict Mode',
        path: '/prog/js/others/strict-mode',
        badge: 'TODO'
      },
    ]
  },
]

export default chapters;
