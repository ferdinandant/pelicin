import React, { useContext } from 'react';
import { TopicKey, TopicConfig, TopicConfigMap } from '@pelicin/config';

const TopicConfigContext = React.createContext<TopicConfig>(null);

export function TopicConfigProvider(props: { topicKey: TopicKey; children: React.ReactNode }) {
  const { topicKey } = props;
  const topicConfig = TopicConfigMap[topicKey];
  return (
    <TopicConfigContext.Provider value={topicConfig}>{props.children}</TopicConfigContext.Provider>
  );
}

export function useTopicConfig() {
  return useContext(TopicConfigContext);
}
