import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/web/css',
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
        title: 'Blend Mode',
        path: '/web/css/aesthetics/blend-mode',
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
      },
      {
        title: 'Opacity',
        path: '/web/css/aesthetics/opacity',
      },
      {
        title: 'Filter',
        path: '/web/css/aesthetics/filter',
      },
      {
        title: 'Clip',
        path: '/web/css/aesthetics/clip',
      },
      {
        title: 'Mask',
        path: '/web/css/aesthetics/mask',
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
      },
      {
        title: 'Offset',
        path: '/web/css/animation/offset',
      },
    ],
  },
  {
    chapter: 'User Interface',
    children: [
      {
        title: 'Cursor',
        path: '/web/css/ui/cursor',
      },
      {
        title: 'Resize',
        path: '/web/css/ui/resize',
      },
      {
        title: 'Touch Action',
        path: '/web/css/ui/touch-action',
      },
      {
        title: 'User Select',
        path: '/web/css/ui/user-select',
      },
      {
        title: 'Scroll',
        path: '/web/css/ui/scroll',
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'List Style',
        path: '/web/css/others/list-style',
      },
      {
        title: 'Counter',
        path: '/web/css/others/counter',
      },
      {
        title: 'Object Fit and Position',
        path: '/web/css/others/object-fit-and-position',
      },
      {
        title: 'Page Break',
        path: '/web/css/aesthetics/page-break',
        badge: 'TODO',
      },
      {
        title: 'The \'All\' Property',
        path: '/web/css/others/all',
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
        title: 'Time',
        path: '/web/css/data-type/time',
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
        title: 'Basic Shape',
        path: '/web/css/data-type/basic-shape',
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
      {
        title: 'Blend Mode',
        path: '/web/css/data-type/blend-mode',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Other Functions',
    children: [
      {
        title: 'Calc Function',
        path: '/web/css/functions/calc-function',
        badge: 'TODO',
      },
      {
        title: 'Math Functions',
        path: '/web/css/functions/math-functions',
        badge: 'TODO',
      },
    ],
  },
  {
    chapter: 'At-Rules',
    children: [
      {
        title: '@media',
        path: '/web/css/at-rules/media',
        badge: 'TODO',
      },
      {
        title: '@keyframes',
        path: '/web/css/animation/animation#@keyframes',
      },
      {
        title: '@font-face',
        path: '/web/css/typography/font#@font-face',
      },
      {
        title: '@counter-style',
        path: '/web/css/at-rules/counter-style',
      },
    ],
  },
  {
    chapter: 'Special Values',
    children: [
      {
        title: 'Initial',
        path: '/web/css/special-values/initial',
      },
      {
        title: 'Inherit',
        path: '/web/css/special-values/inherit',
      },
      {
        title: 'Unset',
        path: '/web/css/special-values/unset',
      },
      {
        title: 'Revert',
        path: '/web/css/special-values/revert',
      },
    ],
  },
  {
    chapter: 'Concepts',
    children: [
      {
        title: 'Variable',
        path: '/web/css/concepts/variable',
      },
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
