import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'DevOps',
  groupHash: 'devops',
  sections: [
    {
      topics: [
        {
          title: 'Docker',
          path: '/devops/docker',
          description: <>TODO</>,
        },
        {
          title: 'Kubernetes',
          path: '/devops/kubernetes',
          description: <>Kubernetes in Action (Marko Lukša)</>,
        },
      ],
    },
  ],
};

export default group;
