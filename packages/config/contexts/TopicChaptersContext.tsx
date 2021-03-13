import React, { useContext } from 'react';
import { TopicKey, TopicChapters, topicKeyToChapters } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TopicChaptersContextValue = {
  topicChapters: TopicChapters;
};

const TopicChaptersContext = React.createContext<TopicChaptersContextValue>(null);

// ================================================================================
// MAIN
// ================================================================================

export function TopicChaptersProvider(props: { topicKey: TopicKey; children: React.ReactNode }) {
  const { topicKey } = props;
  const topicChapters = topicKeyToChapters[topicKey] || [];

  return (
    <TopicChaptersContext.Provider value={{ topicChapters }}>
      {props.children}
    </TopicChaptersContext.Provider>
  );
}

export function useTopicChapters() {
  return useContext(TopicChaptersContext);
}
