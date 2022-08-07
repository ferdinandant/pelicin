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
        title: 'Port Forwarding',
        path: '/devops/kubernetes/concepts/getting-started/port-forwarding',
      },
    ],
  },
  {
    chapter: 'Services',
    children: [
      {
        title: 'Services',
        path: '/devops/kubernetes/concepts/services/services',
      },
      {
        title: 'Endpoints',
        path: '/devops/kubernetes/concepts/services/endpoints',
      },
      {
        title: 'Services: ExternalName ',
        path: '/devops/kubernetes/concepts/services/services-externalname',
      },
      {
        title: 'Services: NodePort',
        path: '/devops/kubernetes/concepts/services/services-nodeport',
      },
      {
        title: 'Services: LoadBalancer',
        path: '/devops/kubernetes/concepts/services/services-loadbalancer',
      },
      {
        title: 'Ingress',
        path: '/devops/kubernetes/concepts/services/ingress',
      },
    ],
  },
  {
    chapter: 'Replication and Controllers',
    children: [
      {
        title: 'Probes: Liveness, Readiness, and Startup Probes',
        path: '/devops/kubernetes/concepts/replication-controller/probes',
      },
      {
        title: 'Replica Sets',
        path: '/devops/kubernetes/concepts/replication-controller/replica-sets',
      },
      {
        title: 'Daemon Sets',
        path: '/devops/kubernetes/concepts/replication-controller/daemon-sets',
      },
      {
        title: 'Jobs',
        path: '/devops/kubernetes/concepts/replication-controller/jobs',
      },
    ],
  },
]

export default chapters;
