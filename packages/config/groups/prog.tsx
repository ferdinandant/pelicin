import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Programming',
  groupHash: 'prog',
  sections: [
    {
      topics: [
        {
          title: 'JavaScript',
          path: '/prog/js',
          description: <>JavaScript: The Definitive Guide, 7th Edition (David Flanagan)</>,
        },
        {
          title: 'C++',
          path: '/prog/cpp',
          description: <>C++ Crash Course (Josh Lospinoso)</>,
        },
      ],
    },
  ],
};

export default group;
