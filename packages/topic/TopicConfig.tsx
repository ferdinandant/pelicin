export type Topic = keyof typeof topicConfigMap;

export type TopicConfigType = {
  mainColor: string;
  accentColor: string;
};

// `mainColor` is picked from https://github.com/ozh/github-colors
// `accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
export const topicConfigMap = {
  css: {
    mainColor: '#563d7c',
    accentColor: '#9f4a84',
  },
} as const;
