import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Web',
  groupDescription: (
    <p>
      Various web development essentials curated from{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Learn">MDN</a>.
    </p>
  ),
  groupHash: 'web',
  sections: [
    {
      sectionTitle: 'The Basics',
      topics: [
        {
          title: 'HTML',
          path: '/web/html/introduction',
        },
        {
          title: 'CSS',
          path: '/web/css/introduction',
        },
      ],
    },
    {
      sectionTitle: 'Other Resources',
      topics: [
        {
          title: 'Front End Developer Handbook 2019',
          path: 'https://frontendmasters.com/books/front-end-handbook/2019/#1.2',
        },
        {
          title: 'Webgems',
          path: 'https://webgems.io',
        },
      ],
    },
  ],
};

export default group;
