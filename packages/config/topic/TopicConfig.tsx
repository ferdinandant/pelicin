export type Topic = keyof typeof TopicConfigMap;

export type TopicConfig = {
  mainColor: string;
  accentColor: string;
};

// `mainColor` is picked from https://github.com/ozh/github-colors
// `accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
export const TopicConfigMap = {
  css: {
    mainColor: '#563d7c',
    accentColor: '#9f4a84',
  },
} as const;
