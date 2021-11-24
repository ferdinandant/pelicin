import React, { useContext } from 'react';
import { TopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

const defaultColor = '#616e7c';

const defaultTopicConfig = {
  basePath: '/',
  topicKey: 'default',
  topicTitle: '',
  mainColor: defaultColor,
  accentColor: defaultColor,
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
