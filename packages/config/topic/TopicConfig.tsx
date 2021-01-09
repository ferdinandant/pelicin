import { TestChapters } from '@pelicin/config';

// `mainColor` is picked from https://github.com/ozh/github-colors
// `accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
export const TopicConfigMap = {
  test: {
    mainColor: '#65737e',
    accentColor: '#5992a0',
    basePath: '/test',
    chapters: TestChapters,
  },
  default: {
    mainColor: '#65737e',
    accentColor: '#65737e',
    basePath: '/',
    chapters: [],
  },
} as const;
