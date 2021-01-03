import React, { useContext } from 'react';
import { Topic, TopicConfig, TopicConfigMap } from '@pelicin/config';

const ThemeColorContext = React.createContext<TopicConfig>(null);

export function TopicConfigProvider(props: { topic: Topic; children: React.ReactNode }) {
  const topicConfig = TopicConfigMap[props.topic];
  return (
    <ThemeColorContext.Provider value={topicConfig}>{props.children}</ThemeColorContext.Provider>
  );
}

export function useTopicConfig() {
  return useContext(ThemeColorContext);
}
