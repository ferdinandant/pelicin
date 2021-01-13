import React, { useContext, useState, useEffect } from 'react';
import { TopicKey, TopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TopicConfigContextValue = TopicConfig & {
  isLoaded: boolean;
};

const fallbackConfig: TopicConfig = {
  topicTitle: '',
  topicDescription: '',
  mainColor: '#34495e',
  accentColor: '#34495e',
};

const TopicConfigContext = React.createContext<TopicConfigContextValue>({
  isLoaded: false,
  ...fallbackConfig,
});

// ================================================================================
// MAIN
// ================================================================================

export function TopicConfigProvider(props: { topicKey: TopicKey; children: React.ReactNode }) {
  const { topicKey } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [topicConfig, setTopicConfig] = useState(fallbackConfig);

  useEffect(() => {
    import('@pelicin/config/topic-config/' + topicKey).then((module) => {
      const fetchedConfig = module.default;
      setTopicConfig(fetchedConfig);
      setIsLoaded(true);
    });
  }, []);

  return (
    <TopicConfigContext.Provider value={{ isLoaded, ...topicConfig }}>
      {props.children}
    </TopicConfigContext.Provider>
  );
}

export function useTopicConfig() {
  return useContext(TopicConfigContext);
}
