import { TopicChapters } from '@pelicin/config';

const chapters: TopicChapters = [
  {
    chapter: null,
    children: [
      {
        title: 'Introduction',
        path: '/devops/kubernetes',
      },
      {
        title: 'References',
        path: '/devops/kubernetes/references',
      },
      {
        title: 'Setup',
        path: '/devops/kubernetes/setup',
      },
    ],
  },
  {
    chapter: 'Concepts',
    children: [
      {
        title: 'Pods',
        path: '/devops/kubernetes/concepts/pods',
      },
      {
        title: 'Services',
        path: '/devops/kubernetes/concepts/services',
      },
    ],
  },
]

export default chapters;
