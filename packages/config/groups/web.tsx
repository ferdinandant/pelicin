import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Web',
  groupHash: 'web',
  sections: [
    {
      sectionTitle: 'The Basics',
      topics: [
        {
          title: 'HTML',
          path: '/web/html',
          description: <>Reference summary from MDN.</>,
        },
        {
          title: 'CSS',
          path: '/web/css',
          description: <>Reference summary from MDN and CSS-Tricks.</>,
        },
        {
          title: 'SVG',
          path: '/web/svg',
          description: <>Reference summary from MDN.</>,
        },
      ],
    },
    {
      sectionTitle: 'Protocols',
      topics: [
        {
          title: 'HTTP',
          path: '/web/http',
          description: <>Reference summary from MDN and relevant RFC documents.</>,
        },
      ],
    },
    {
      sectionTitle: 'Other Resources',
      topics: [
        {
          title: 'Google web.dev',
          path: 'https://web.dev/learn/',
        },
        {
          title: "andreasbm's Web skills",
          path: 'https://andreasbm.github.io/web-skills/',
        },
        {
          title: 'Front End Developer Handbook 2019',
          path: 'https://frontendmasters.com/books/front-end-handbook/2019/#1.2',
        },
      ],
    },
  ],
};

export default group;
