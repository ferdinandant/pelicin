import React, { useContext, useState } from 'react';
import { TopicKey, TopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

const defaultTopicConfig = {
  basePath: '/',
  topicKey: 'default',
  topicTitle: '',
  mainColor: '#3e4c59',
  accentColor: '#3e4c59',
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
