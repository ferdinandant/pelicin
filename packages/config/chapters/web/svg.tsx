import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/web/svg',
      },
    ],
  },
  {
    chapter: 'Concepts',
    children: [
      {
        title: 'Coordinate System',
        path: '/web/concepts/coordinate-system',
      },
      {
        title: 'View Box',
        path: '/web/concepts/view-box',
        badge: 'TODO'
      },
    ],
  },
  { '@separator': 'SVG Elements' },
  {
    chapter: 'Drawing',
    children: [
      {
        title: 'Basic Shape',
        path: '/web/drawing/basic-shape',
        badge: 'TODO'
      },
      {
        title: 'Path',
        path: '/web/drawing/path',
        badge: 'TODO'
      },
      {
        title: 'Text',
        path: '/web/drawing/text',
        badge: 'TODO'
      },
      {
        title: 'Image',
        path: '/web/drawing/text',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Aesthetics',
    children: [
      {
        title: 'Fill and Stroke',
        path: '/web/aesthetics/fill-and-stroke',
        badge: 'TODO'
      },
      {
        title: 'Gradient',
        path: '/web/aesthetics/gradient',
        badge: 'TODO'
      },
      {
        title: 'Pattern',
        path: '/web/aesthetics/gradient',
        badge: 'TODO'
      },
      {
        title: 'Clipping and Masking',
        path: '/web/aesthetics/clipping-and-masking',
        badge: 'TODO'
      },
      {
        title: 'Transformation',
        path: '/web/aesthetics/transformation',
        badge: 'TODO'
      },
      {
        title: 'Filter',
        path: '/web/aesthetics/filter',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'Grouping',
        path: '/web/others/grouping',
        badge: 'TODO'
      },
    ],
  },
]

export default chapters;
