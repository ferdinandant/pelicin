import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Sample',
  groupDescription: (
    <p>This is just for documentation/showcase. It won't be displayed in the final build.</p>
  ),
  groupHash: 'sample',
  sections: [
    {
      topics: [
        {
          title: 'Example',
          path: '/sample/article',
        },
      ],
    },
  ],
};

export default group;
