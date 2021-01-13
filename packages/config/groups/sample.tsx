import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: 'Sample',
  groupDescription: 'Makan sapi pun saya sudah siap!',
  groupHash: 'sample',
  topics: [
    {
      title: 'HTML',
      path: '/sample/test',
    },
    {
      title: 'CSS',
      path: '/sample/test',
      description: 'halo-halo bandung!',
    },
    {
      title: 'JavaScript',
      path: '/sample/test',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
};

export default group;
