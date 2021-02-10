import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Web',
  groupDescription: (
    <p>
      Various web development essentials curated from{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Learn">MDN</a>. You may also want to look at{' '}
      <a href="https://frontendmasters.com/books/front-end-handbook/2019/#1.2">
        Front End Developer Handbook 2019
      </a>{' '}
      by Frontend Masters.
    </p>
  ),
  groupHash: 'web',
  sections: [
    {
      topics: [
        {
          title: 'HTML',
          description: 'Comprehensive reference summary from MDN',
          path: '/web/html/introduction',
        },
        {
          title: 'CSS',
          path: '/web/css/introduction',
        },
      ],
    },
  ],
};

export default group;
