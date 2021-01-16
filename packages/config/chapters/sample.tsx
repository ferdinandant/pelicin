import { TopicChapters } from '@pelicin/config';
import { Latex } from '@pelicin/components';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Sample Article',
        path: '/sample/article',
      },
    ],
  },
  {
    chapter: <>Feature Showcase</>,
    children: [
      {
        title: <>With <Latex>{String.raw`\mathrm{Math}`}</Latex></>,
        path: '/sample/math',
      },
      {
        title: 'With code',
        path: '/sample/code',
      },
    ],
  },
];

export default chapters;
