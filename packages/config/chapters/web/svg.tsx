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
        path: '/web/svg/concepts/coordinate-system',
      },
      {
        title: 'View Box',
        path: '/web/svg/concepts/view-box',
      },
    ],
  },
  { '@separator': 'SVG Elements' },
  {
    chapter: 'Drawing',
    children: [
      {
        title: 'Basic Shape',
        path: '/web/svg/drawing/basic-shape',
      },
      {
        title: 'Path',
        path: '/web/svg/drawing/path',
      },
      {
        title: 'Text',
        path: '/web/svg/drawing/text',
        badge: 'TODO'
      },
      {
        title: 'Image',
        path: '/web/svg/drawing/image',
      },
    ],
  },
  {
    chapter: 'Aesthetics',
    children: [
      {
        title: 'Fill and Stroke',
        path: '/web/svg/aesthetics/fill-and-stroke',
        badge: 'TODO'
      },
      {
        title: 'Gradient',
        path: '/web/svg/aesthetics/gradient',
        badge: 'TODO'
      },
      {
        title: 'Pattern',
        path: '/web/svg/aesthetics/gradient',
        badge: 'TODO'
      },
      {
        title: 'Clipping and Masking',
        path: '/web/svg/aesthetics/clipping-and-masking',
        badge: 'TODO'
      },
      {
        title: 'Transformation',
        path: '/web/svg/aesthetics/transformation',
        badge: 'TODO'
      },
      {
        title: 'Filter',
        path: '/web/svg/aesthetics/filter',
        badge: 'TODO'
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'Grouping',
        path: '/web/svg/others/grouping',
        badge: 'TODO'
      },
    ],
  },
]

export default chapters;
