import { Latex } from '@pelicin/components';

export default [
  {
    chapter: null,
    children: [
      {
        title: (
          <span>
            Ini hanyalah <Latex>{String.raw`\mathrm{Ujian}`}</Latex>
          </span>
        ),
        path: '/test/123',
      },
    ],
  },
  {
    chapter: <>Selalu berlaku sopan di jalan, ya!</>,
    children: [
      {
        title: <>Saya hanya mau ini dan itu :(</>,
        path: '/sample/test',
      },
      {
        title: 'Duh, yang ini juga mau',
        path: '/sample/other',
      },
      {
        title: 'Yang ini juga :<',
        path: '/sample/other',
      },
    ],
  },
  {
    chapter: 'Lorem ipsum',
    children: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        path: '/sample/other',
      },
      {
        title: 'Donec odio. Quisque volutpat mattis eros',
        path: '/sample/other',
      },
      {
        title:
          'Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede',
        path: '/sample/other',
      },
    ],
  },
];
