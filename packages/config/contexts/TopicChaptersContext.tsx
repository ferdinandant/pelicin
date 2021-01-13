import React, { useContext, useState, useEffect } from 'react';
import { TopicKey, TopicChapters } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TopicChaptersContextValue = {
  isLoaded: boolean;
  topicChapters: TopicChapters;
};

const TopicChaptersContext = React.createContext<TopicChaptersContextValue>({
  isLoaded: false,
  topicChapters: [],
});

// ================================================================================
// MAIN
// ================================================================================

export function TopicChaptersProvider(props: { topicKey: TopicKey; children: React.ReactNode }) {
  const { topicKey } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [topicChapters, setTopicChapters] = useState([]);

  useEffect(() => {
    import('@pelicin/config/topic-chapters/' + topicKey).then((module) => {
      const fetchedChapters = module.default;
      setTopicChapters(fetchedChapters);
      setIsLoaded(true);
    });
  }, []);

  return (
    <TopicChaptersContext.Provider value={{ isLoaded, topicChapters }}>
      {props.children}
    </TopicChaptersContext.Provider>
  );
}

export function useTopicChapters() {
  return useContext(TopicChaptersContext);
}
