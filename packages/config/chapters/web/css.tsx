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
        path: '/web/css/display/display-grid',
      },
    ],
  },
  {
    chapter: 'Box Model',
    children: [
      {
        title: 'Margin',
        path: '/web/css/layouting/margin',
      },
      {
        title: 'Padding',
        path: '/web/css/layouting/padding',
      },
      {
        title: 'Border',
        path: '/web/css/layouting/border',
      },
      {
        title: 'Table Border',
        path: '/web/css/layouting/table-border',
      },
      {
        title: 'Outline',
        path: '/web/css/layouting/outline',
      },
      {
        title: 'Width, Height, and Box Sizing',
        path: '/web/css/layouting/width-height',
      },
      {
        title: 'Overflow and Overscroll',
        path: '/web/css/layouting/overflow-overscroll',
      },
    ],
  },
  {
    chapter: 'Positioning',
    children: [
      {
        title: 'Position',
        path: '/web/css/positioning/position',
      },
      {
        title: 'Float',
        path: '/web/css/positioning/float',
      },
      {
        title: 'Z-Index',
        path: '/web/css/positioning/z-index',
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
        title: 'Background',
        path: '/todo',
      },
      {
        title: 'Shadow',
        path: '/todo',
      },
    ],
  },
  {
    chapter: 'Data Type',
    children: [
      {
        title: 'Image',
        path: '/web/css/data-type/image',
      },
      {
        title: 'Filter Function',
        path: '/web/css/data-type/filter-function',
      },
    ],
  },
  {
    chapter: 'Concepts',
    children: [
      {
        title: 'Specificity and !important',
        path: '/web/css/concepts/specificity',
      },
      {
        title: 'Block Formatting Context',
        path: '/web/css/concepts/block-formatting-context',
      },
    ],
  },
];

export default chapters;
