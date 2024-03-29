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
        path: '/prog/cpp/getting-started/expressions',
      },
      {
        title: 'Statements',
        path: '/prog/cpp/getting-started/statements',
        badge: 'TODO'
      },
      {
        title: 'Functions',
        path: '/prog/cpp/getting-started/functions',
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
    chapter: 'Object-Oriented Programming',
    children: [
      {
        title: 'Inheritance',
        path: '/prog/cpp/oop/inheritance',
      },
      {
        title: 'Virtual Functions',
        path: '/prog/cpp/oop/virtual-functions',
      },
      {
        title: 'Virtual Base Classes',
        path: '/prog/cpp/oop/virtual-base-classes',
      },
      {
        title: 'Friend Functions and Classes',
        path: '/prog/cpp/oop/friend-functions-classes',
      },
      {
        title: 'Templates',
        path: '/prog/cpp/oop/templates',
      },
    ],
  },
  {
    chapter: 'Type Definitons and Conversions',
    children: [
      {
        title: 'Implicit Conversion (Coercion)',
        path: '/prog/cpp/td/conversion-implicit-coercion',
      },
      {
        title: 'Explicit Conversion (Casting)',
        path: '/prog/cpp/td/conversion-explicit-casting',
      },
      {
        title: 'Type Aliases and Typedefs',
        path: '/prog/cpp/td/type-aliases-typedef',
      },
      {
        title: 'Function Overloading',
        path: '/prog/cpp/td/overloading-function',
        badge: 'TODO',
      },
      {
        title: 'Operator Overloading',
        path: '/prog/cpp/td/overloading-operator',
        badge: 'TODO',
      },
    ],
  },
  {
    chapter: 'Scope, Duration, and Linkage',
    children: [
      {
        title: 'Object Life Cycle',
        path: '/prog/cpp/sdl/object-life-cycle',
      },
      {
        title: 'Scope and Linkage',
        path: '/prog/cpp/sdl/scope-linkage',
      },
      {
        title: 'Namespaces',
        path: '/prog/cpp/sdl/namespaces',
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'Exception Classes',
        path: '/prog/cpp/others/exceptions',
        badge: 'TODO'
      },
      {
        title: 'Constant Expressions',
        path: '/prog/cpp/others/expressions-constant',
      },
      {
        title: 'Volatile Expressions',
        path: '/prog/cpp/others/expressions-volatile',
      },
      
    ],
  },
  { '@separator': 'Libraries' },
  {
    chapter: 'Libraries and Frameworks',
    children: [
      {
        title: 'Smart Pointers',
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
