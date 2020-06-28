import React, { useContext } from 'react';

export type Topic = 'css';

// `mainColor` is picked from https://github.com/ozh/github-colors
// `accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
export type TopicConfig = {
  mainColor: string;
  accentColor: string;
};

export const TopicConfig: Record<Topic, TopicConfig> = {
  css: {
    mainColor: '#563d7c',
    accentColor: '#9f4a84',
  },
};

const ThemeColorContext = React.createContext<TopicConfig>(null);

export function TopicConfigProvider(props: { topic: Topic; children: React.ReactNode }) {
  const topicConfig = TopicConfig[props.topic];
  return (
    <ThemeColorContext.Provider value={topicConfig}>{props.children}</ThemeColorContext.Provider>
  );
}

export function useTopicConfig() {
  return useContext(ThemeColorContext);
}
