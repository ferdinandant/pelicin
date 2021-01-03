import React, { useContext } from 'react';
import { Topic, TopicConfig, TopicConfigMap } from '@pelicin/config';

const TopicConfigContext = React.createContext<TopicConfig>(null);

export function TopicConfigProvider(props: { topic: Topic; children: React.ReactNode }) {
  const topicConfig = TopicConfigMap[props.topic];
  return (
    <TopicConfigContext.Provider value={topicConfig}>{props.children}</TopicConfigContext.Provider>
  );
}

export function useTopicConfig() {
  return useContext(TopicConfigContext);
}
