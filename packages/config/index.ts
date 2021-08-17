import path from 'path';
export * from './types';

// ================================================================================
// CONSTANTS
// ================================================================================

import pathPrefixToTopicConfig from './constants/pathPrefixToTopicConfig';
export { default as pathPrefixToTopicConfig } from './constants/pathPrefixToTopicConfig';
export * from './constants/sessionStorageKeys';

// ================================================================================
// TYPES/CONST
// ================================================================================

const topicKeys: string[] = [];
const groupKeys: string[] = [];

(() => {
  const groupKeySet = new Set<string>();
  Object.values(pathPrefixToTopicConfig).forEach((topicConfig) => {
    // Extract `topicKey`
    const { topicKey } = topicConfig;
    if (topicKey === 'default') {
      return;
    }
    topicKeys.push(topicKey);
    // Extract `groupKey`
    const topicKeyPrefix = path.dirname(topicKey);
    const groupKey = topicKeyPrefix === '.' ? topicKey : topicKeyPrefix;
    if (!groupKeySet.has(groupKey)) {
      groupKeySet.add(groupKey);
      groupKeys.push(groupKey);
    }
  });
})();

// ================================================================================
// CHAPTERS
// ================================================================================

export const topicKeyToChapters = topicKeys.reduce((acc, topicKey) => {
  return Object.assign(acc, {
    // eslint-disable-next-line
    [topicKey]: require('./chapters/' + topicKey).default,
  });
}, {});

// ================================================================================
// GROUPS
// ================================================================================

// We separate the sample group because it's rendered conditionally
// @see pages/index.tsx
export { default as SampleGroup } from './groups/sample';

// We exclude the sample group for the same reason above
// @see pages/index.tsx
export const groups = groupKeys
  .filter((groupKey) => groupKey !== 'sample')
  .map((groupKey) => {
    // eslint-disable-next-line
    return require('./groups/' + groupKey).default;
  }, []);

// ================================================================================
// UTILS
// ================================================================================

export * from './contexts/TopicConfigContext';
export * from './contexts/TopicChaptersContext';
export { default as getTopicConfigFromPath } from './utils/getTopicConfigFromPath';
