import React from 'react';
import { TopicGroup } from '@pelicin/config';
import { Link } from '@pelicin/components';

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
          description: (
            <>
              C++ Crash Course (Josh Lospinoso) and{' '}
              <Link str="learncpp.com" link="https://www.learncpp.com" />
            </>
          ),
        },
      ],
    },
  ],
};

export default group;
