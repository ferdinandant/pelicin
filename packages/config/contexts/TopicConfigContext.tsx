import React, { useContext } from 'react';
import { TopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

const defaultTopicConfig = {
  basePath: '/',
  topicKey: 'default',
  topicTitle: '',
  mainColor: 'var(--color-blue-7)',
  accentColor: 'var(--color-purple-8)',
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
