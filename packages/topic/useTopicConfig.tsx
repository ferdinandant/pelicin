import React, { useContext } from 'react';
import { Topic, TopicConfigType, TopicConfig } from './TopicConfig';

const ThemeColorContext = React.createContext<TopicConfigType>(null);

export function TopicConfigProvider(props: { topic: Topic; children: React.ReactNode }) {
  const topicConfig = TopicConfig[props.topic];
  return (
    <ThemeColorContext.Provider value={topicConfig}>{props.children}</ThemeColorContext.Provider>
  );
}

export function useTopicConfig() {
  return useContext(ThemeColorContext);
}
