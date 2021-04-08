import React from 'react';
import { Link } from '@pelicin/components';
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
          path: '/web/html/introduction',
          description: (
            <>
              Reference summary from{' '}
              <Link link="https://developer.mozilla.org/en-US/docs/Learn" str="MDN" />.
            </>
          ),
        },
        {
          title: 'CSS',
          path: '/web/css/introduction',
          description: (
            <>
              Reference summary from{' '}
              <Link link="https://developer.mozilla.org/en-US/docs/Learn" str="MDN" /> (mainly) and{' '}
              <Link link="https://css-tricks.com/almanac/" str="CSS-Tricks" />.
            </>
          ),
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
