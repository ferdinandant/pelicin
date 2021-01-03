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
        path: '/test/test',
      },
      {
        title: 'Duh, yang ini juga mau',
        path: '/test/other',
      },
    ],
  },
];
