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
  { '@separator': 'The Core Language' },
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
        path: '/prog/cpp/getting-started/variables-constants',
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
        path: '/prog/cpp/core/functions',
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
        title: 'Enumerations',
        path: '/prog/cpp/types/enumerations',
      },
      {
        title: 'Unions',
        path: '/prog/cpp/types/unions',
      },
      {
        title: 'Classes and Structs',
        path: '/prog/cpp/types/classes-structs',
      },
      {
        title: 'Pointers',
        path: '/prog/cpp/types/pointers',
      },
      {
        title: 'References',
        path: '/prog/cpp/types/references',
      },
      {
        title: 'The Auto Type',
        path: '/prog/cpp/types/auto',
      },
    ],
  },
  {
    chapter: 'Polymorphism',
    children: [
      {
        title: 'Inheritance',
        path: '/prog/cpp/polymorphism/inheritance',
        badge: 'TODO'
      },
      {
        title: 'Virtual Functions',
        path: '/prog/cpp/polymorphism/virtual-functions',
        badge: 'TODO'
      },
      {
        title: 'Templates',
        path: '/prog/cpp/polymorphism/templates',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'Object Life Cycle',
        path: '/prog/cpp/others/object-life-cycle',
        badge: 'TODO'
      },
      {
        title: 'Static and Extern Variables',
        path: '/prog/cpp/others/static-extern-variables',
        badge: 'TODO'
      },
      {
        title: 'Exception Classes',
        path: '/prog/cpp/others/exceptions',
        badge: 'TODO'
      },
    ],
  },
  { '@separator': 'Libraries' },
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
