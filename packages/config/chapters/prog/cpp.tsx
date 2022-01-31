import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/prog/cpp',
      },
      {
        title: 'References',
        path: '/prog/cpp/references',
      },
      {
        title: 'Setup',
        path: '/prog/cpp/setup',
      },
    ],
  },
  {
    chapter: 'Getting Started',
    children: [
      {
        title: 'Code Structure',
        path: '/prog/cpp/getting-started/code-structure',
        badge: 'TODO'
      },
      {
        title: 'Comments',
        path: '/prog/cpp/getting-started/comments',
      },
      {
        title: 'Variables and Constants',
        path: '/prog/cpp/getting-started/variables-constant',
        badge: 'TODO'
      },
      {
        title: 'Expressions',
        path: '/prog/cpp/core/expressions',
        badge: 'TODO'
      },
      {
        title: 'Statements',
        path: '/prog/cpp/core/statements',
        badge: 'TODO'
      },
      {
        title: 'Functions',
        path: '/prog/cpp/core/statements',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Types',
    children: [
      {
        title: 'Primitive Types',
        path: '/prog/cpp/types/primitive',
      },
      {
        title: 'Arrays',
        path: '/prog/cpp/types/arrays',
      },
      {
        title: 'C-Style Strings',
        path: '/prog/cpp/types/c-style-strings',
      },
      {
        title: 'User-Defined Types',
        path: '/prog/cpp/types/user-defined',
      },
      {
        title: 'Reference Types',
        path: '/prog/cpp/types/reference',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'The Core Language',
    children: [
      
      {
        title: 'Object Life Cycle',
        path: '/prog/cpp/core/object-life-cycle',
        badge: 'TODO'
      },
      {
        title: 'Runtime Polymorphism',
        path: '/prog/cpp/core/polymorphism-runtime',
        badge: 'TODO'
      },
      {
        title: 'Compile-Time Polymorphism',
        path: '/prog/cpp/core/polymorphism-compile-time',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Libraries and Frameworks',
    children: [
      {
        title: 'Smart Pointes',
        path: '/prog/cpp/lib/smart-pointers',
        badge: 'TODO'
      },
      {
        title: 'Data Structures',
        path: '/prog/cpp/lib/data-structures',
        badge: 'TODO'
      },
      {
        title: 'Date Utilities',
        path: '/prog/cpp/lib/date-utilities',
        badge: 'TODO'
      },
      {
        title: 'Numerics Utilities',
        path: '/prog/cpp/lib/numerics-utilities',
        badge: 'TODO'
      },
      {
        title: 'Iterators',
        path: '/prog/cpp/lib/iterators',
        badge: 'TODO'
      },
      {
        title: 'Strings',
        path: '/prog/cpp/lib/strings',
        badge: 'TODO'
      },
      {
        title: 'Streams',
        path: '/prog/cpp/lib/strings',
        badge: 'TODO'
      },
      {
        title: 'Filesystems',
        path: '/prog/cpp/lib/file-systems',
        badge: 'TODO'
      },
      {
        title: 'Concurrency and Parallelism',
        path: '/prog/cpp/lib/concurrency-parallelism',
        badge: 'TODO'
      },
    ],
  },
]

export default chapters;
