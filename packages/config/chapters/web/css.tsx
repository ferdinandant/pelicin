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
        title: 'Position and Inset',
        path: '/web/css/positioning/position',
      },
      {
        title: 'Float and Clear',
        path: '/web/css/positioning/float',
      },
      {
        title: 'Z-Index and Isolation',
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
        title: 'Color',
        path: '/web/css/typography/color',
      },
      {
        title: 'Emphasis and Decoration',
        path: '/web/css/typography/emphasis-decoration',
      },
      {
        title: 'Spacing and Alignment',
        path: '/web/css/typography/spacing-alignment',
      },
      {
        title: 'Column',
        path: '/web/css/typography/column',
      },
      {
        title: 'Orientation',
        path: '/web/css/typography/orientation',
      },
      {
        title: 'Overflow and Wrapping',
        path: '/web/css/typography/overflow-wrapping',
      },
      {
        title: 'Shape',
        path: '/web/css/typography/shape',
        badge: 'TODO',
      },
      {
        title: 'Others',
        path: '/web/css/typography/others',
      },
    ],
  },
  {
    chapter: 'Aesthetics',
    children: [
      {
        title: 'Background',
        path: '/web/css/aesthetics/background',
      },
      {
        title: 'Box and Text Shadow',
        path: '/web/css/aesthetics/shadow',
      },
      {
        title: 'Transform',
        path: '/web/css/aesthetics/transform',
      },
      {
        title: 'Perspective',
        path: '/web/css/aesthetics/perspective',
        badge: 'TODO',
      },
      {
        title: 'Opacity',
        path: '/web/css/aesthetics/opacity',
      },
      {
        title: 'Filter',
        path: '/web/css/aesthetics/filter',
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
      {
        title: 'Offset',
        path: '/web/css/animation/offset',
        badge: 'TODO',
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'List',
        path: '/web/css/others/list',
        badge: 'TODO',
      },
      {
        title: 'Object Fit and Position',
        path: '/web/css/aesthetics/object-fit-and-position',
        badge: 'TODO',
      },
      {
        title: 'Page Break',
        path: '/web/css/aesthetics/page-break',
        badge: 'TODO',
      },
      {
        title: 'Cursor',
        path: '/web/css/others/cursor',
        badge: 'TODO',
      },
      {
        title: 'Resize',
        path: '/web/css/others/resize',
        badge: 'TODO',
      },
      {
        title: 'Scroll',
        path: '/web/css/others/scroll',
        badge: 'TODO',
      },
      {
        title: 'Scrollbar',
        path: '/web/css/others/scrollbar',
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
      },
      {
        title: 'Color',
        path: '/web/css/data-type/color',
      },
      {
        title: 'Image',
        path: '/web/css/data-type/image',
      },
      {
        title: 'Easing Function',
        path: '/web/css/data-type/easing-function',
      },
      {
        title: 'Transform Function',
        path: '/web/css/data-type/transform-function',
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
