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
  { '@separator': 'CSS Properties' },
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
      {
        title: 'Font',
        path: '/web/css/typography/font',
      },
      {
        title: 'Emphasis and Decoration',
        path: '/web/css/typography/emphasis-decoration',
        badge: 'TODO',
      },
      {
        title: 'Spacing and Alignment',
        path: '/web/css/typography/spacing-alignment',
        badge: 'TODO',
      },
      {
        title: 'Orientation',
        path: '/web/css/typography/orientation',
        badge: 'TODO',
      },
      {
        title: 'Overflow',
        path: '/web/css/typography/overflow',
        badge: 'TODO',
      },
      {
        title: 'Others',
        path: '/web/css/typography/others',
        badge: 'TODO',
      },
    ],
  },
  {
    chapter: 'Aesthetics',
    children: [
      {
        title: 'Color',
        path: '/web/css/aesthetics/color',
        badge: 'TODO',
      },
      {
        title: 'Background',
        path: '/web/css/aesthetics/background',
        badge: 'TODO',
      },
      {
        title: 'Shadow and Text Shadow',
        path: '/web/css/aesthetics/shadow',
        badge: 'TODO',
      },
      {
        title: 'Translate and Transform',
        path: '/web/css/aesthetics/translate-transform',
        badge: 'TODO',
      },
    ],
  },
  {
    chapter: 'Animation',
    children: [
      {
        title: 'Animation',
        path: '/web/css/animation/animation',
      },
      {
        title: 'Transition',
        path: '/web/css/animation/transition',
        badge: 'TODO',
      },
    ],
  },
  { '@separator': 'Others' },
  {
    chapter: 'Data Type',
    children: [
      {
        title: 'Length',
        path: '/web/css/data-type/length',
        badge: 'TODO',
      },
      {
        title: 'Image',
        path: '/web/css/data-type/image',
        badge: 'TODO',
      },
      {
        title: 'Filter Function',
        path: '/web/css/data-type/filter-function',
        badge: 'TODO',
      },
      {
        title: 'Easing Function',
        path: '/web/css/data-type/easing-function',
        badge: 'TODO',
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
        badge: 'TODO',
      },
      {
        title: 'Stacking Context',
        path: '/web/css/concepts/stacking-context',
        badge: 'TODO',
      },
    ],
  },
];

export default chapters;
