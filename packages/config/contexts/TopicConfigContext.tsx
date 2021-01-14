import React, { useContext, useState, useEffect } from 'react';
import { TopicKey, TopicConfig, DefaultTopic } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TopicConfigContextValue = TopicConfig & {
  isLoaded: boolean;
};

const fallbackValue: TopicConfigContextValue = {
  isLoaded: false,
  ...DefaultTopic,
};

const TopicConfigContext = React.createContext<TopicConfigContextValue>(fallbackValue);

// ================================================================================
// MAIN
// ================================================================================

export function TopicConfigProvider(props: { topicKey: TopicKey; children: React.ReactNode }) {
  const { topicKey } = props;
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    import('@pelicin/config/topic-config/' + topicKey).then((module) => {
      const fetchedConfig = module.default;
      setValue({
        isLoaded: true,
        ...fetchedConfig,
      });
    });
  }, [topicKey]);

  return <TopicConfigContext.Provider value={value}>{props.children}</TopicConfigContext.Provider>;
}

export function useTopicConfig() {
  return useContext(TopicConfigContext);
}
