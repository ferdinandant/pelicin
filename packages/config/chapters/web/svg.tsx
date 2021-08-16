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
      {
        title: 'Grouping',
        path: '/web/svg/concepts/grouping',
      },
      {
        title: 'Reusing Components',
        path: '/web/svg/concepts/reusing-components',
      },
    ],
  },
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
      },
      {
        title: 'Gradient',
        path: '/web/svg/aesthetics/gradient',
      },
      {
        title: 'Pattern',
        path: '/web/svg/aesthetics/pattern',
      },
      {
        title: 'Clipping and Masking',
        path: '/web/svg/aesthetics/clipping-and-masking',
      },
      {
        title: 'Transformation',
        path: '/web/css/data-type/transform-function',
      },
      {
        title: 'Filter',
        path: '/web/svg/aesthetics/filter',
      },
    ],
  },
  {
    chapter: 'Others',
    children: [
      {
        title: 'Animation',
        path: '/web/svg/others/animation',
      },
      {
        title: 'Hyperlinks',
        path: '/web/svg/others/hyperlinks',
        badge: 'TODO'
      },
      {
        title: 'Metadata',
        path: '/web/svg/others/metadata',
        badge: 'TODO'
      },
    ],
  },
]

export default chapters;
