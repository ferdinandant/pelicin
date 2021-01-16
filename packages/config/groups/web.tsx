import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Web',
  groupDescription: (
    <p>
      Various web development essentials curated from{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Learn">MDN</a> and{' '}
      <cite>
        <a href="https://frontendmasters.com/books/front-end-handbook/2019/#1.2">
          Front End Developer Handbook 2019
        </a>{' '}
      </cite>
      by Frontend Masters.
    </p>
  ),
  groupHash: 'web',
  sections: [
    {
      topics: [
        {
          title: 'HTML',
          path: '/web/html/introduction',
        },
      ],
    },
  ],
};

export default group;
