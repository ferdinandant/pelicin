import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/web/css/introduction',
      },
      {
        title: 'Embedding CSS',
        path: '/web/css/embedding-css',
      },
    ],
  },
  {
    chapter: 'Selectors',
    children: [
      {
        title: 'CSS Selectors',
        path: '/web/css/selectors/css-selectors',
      },
      {
        title: 'Pseudo Classes',
        path: '/web/css/selectors/pseudo-classes',
      },
      {
        title: 'Pseudo Elements',
        path: '/web/css/selectors/pseudo-elements',
      },
    ],
  },
  {
    chapter: 'Concepts',
    children: [
      {
        title: 'Specificity',
        path: '/web/css/concepts/specificity',
      },
    ],
  },
  {
    chapter: 'Display',
    children: [
      {
        title: 'Display',
        path: '/web/css/display/display',
      },
      {
        title: 'Display: Table',
        path: '/web/css/display/display-table',
      },
      {
        title: 'Display: Flex',
        path: '/web/css/display/display-flex',
      },
      {
        title: 'Display: Grid',
        path: '/web/css/display/display-grip',
      },
    ],
  },
  {
    chapter: 'Layouting',
    children: [
      {
        title: 'Margin',
        path: '/todo',
      },
      {
        title: 'Padding',
        path: '/todo',
      },
      {
        title: 'Border',
        path: '/todo',
      },
      {
        title: 'Outline',
        path: '/todo',
      },
    ],
  },
  {
    chapter: 'Typography',
    children: [
    ],
  },
  {
    chapter: 'Aesthetics',
    children: [
      {
        title: 'Background-Color',
        path: '/todo',
      },
      {
        title: 'Shadow',
        path: '/todo',
      },
    ],
  },
];

export default chapters;
