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
  {'@separator': 'Concepts'},
  {
    chapter: 'Getting Started',
    children: [
      {
        title: 'Pods',
        path: '/devops/kubernetes/concepts/getting-started/pods',
      },
      {
        title: 'YAML Descriptor',
        path: '/devops/kubernetes/concepts/getting-started/yaml-descriptor',
      },
      {
        title: 'Labels and Selectors',
        path: '/devops/kubernetes/concepts/getting-started/labels-selectors',
      },
      {
        title: 'Annotations',
        path: '/devops/kubernetes/concepts/getting-started/annotations',
      },
      {
        title: 'Namespaces',
        path: '/devops/kubernetes/concepts/getting-started/namespaces',
      },
      {
        title: 'Services',
        path: '/devops/kubernetes/concepts/getting-started/services',
      },
      {
        title: 'Port Forwarding',
        path: '/devops/kubernetes/concepts/getting-started/port-forwarding',
      },
    ],
  },
  {
    chapter: 'Deployment',
    children: [
      {
        title: 'Liveness Probes',
        path: '/devops/kubernetes/concepts/deployment/liveness-probes',
      },
      {
        title: 'Replica Sets',
        path: '/devops/kubernetes/concepts/deployment/replica-sets',
      },
      {
        title: 'Daemon Sets',
        path: '/devops/kubernetes/concepts/deployment/daemon-sets',
      },
      {
        title: 'Jobs',
        path: '/devops/kubernetes/concepts/deployment/jobs',
      },
      {
        title: 'Deployments',
        path: '/devops/kubernetes/concepts/deployment/deployments',
        badge: 'TODO'
      },
    ],
  },
]

export default chapters;
