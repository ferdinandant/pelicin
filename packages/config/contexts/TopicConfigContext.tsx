import React, { useContext } from 'react';
import { TopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

const defaultTopicConfig = {
  basePath: '/',
  topicKey: 'default',
  topicTitle: '',
  // var(--color-blue-7)
  mainColor: '#0f369b',
  // var(--color-purple-7)
  accentColor: '#42379a',
};

const TopicConfigContext = React.createContext<TopicConfig>(defaultTopicConfig);

// ================================================================================
// MAIN
// ================================================================================

export function TopicConfigProvider(props: { value: TopicConfig; children: React.ReactNode }) {
  const { value, children } = props;
  return <TopicConfigContext.Provider value={value}>{children}</TopicConfigContext.Provider>;
}

export function useTopicConfig() {
  return useContext(TopicConfigContext);
}
