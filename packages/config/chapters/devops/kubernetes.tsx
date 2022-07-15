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
        title: 'YAML Descriptor',
        path: '/devops/kubernetes/concepts/yaml-descriptor',
      },
      {
        title: 'Port Forwarding',
        path: '/devops/kubernetes/concepts/port-forwarding',
      },
      {
        title: 'Labels and Selectors',
        path: '/devops/kubernetes/concepts/labels-selectors',
      },
      {
        title: 'Services',
        path: '/devops/kubernetes/concepts/services',
      },
    ],
  },
]

export default chapters;
