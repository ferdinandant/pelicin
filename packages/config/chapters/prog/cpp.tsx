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
    chapter: 'The Core Language',
    children: [
      {
        title: 'The Basics',
        path: '/prog/cpp/core/basics',
      },
      {
        title: 'Types',
        path: '/prog/cpp/core/types',
        badge: 'TODO'
      },
      {
        title: 'Reference Types',
        path: '/prog/cpp/core/types-reference',
        badge: 'TODO'
      },
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
