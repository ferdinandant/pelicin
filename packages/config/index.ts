export * from './types';

// ================================================================================
// CONSTANTS
// ================================================================================

import pathPrefixToTopicConfig from './constants/pathPrefixToTopicConfig';
export { default as pathPrefixToTopicConfig } from './constants/pathPrefixToTopicConfig';
export * from './constants/sessionStorageKeys';

// ================================================================================
// CHAPTERS
// ================================================================================

export const topicKeys = Object.values(pathPrefixToTopicConfig).reduce((result, topicConfig) => {
  const { topicKey } = topicConfig;
  if (topicKey !== 'default') {
    result.push(topicKey);
  }
  return result;
}, []);

export const topicKeyToChapters = topicKeys.reduce((acc, topicKey) => {
  return Object.assign(acc, {
    // eslint-disable-next-line
    [topicKey]: require('./chapters/' + topicKey).default,
  });
}, {});

// ================================================================================
// GROUPS
// ================================================================================

// We don't put chapters in index because they are always loaded dynamically.
// @see: packages/config/contexts/TopicChaptersContext.tsx
export { default as SampleGroup } from './groups/sample';
export { default as WebGroup } from './groups/web';

// ================================================================================
// UTILS
// ================================================================================

export * from './contexts/TopicConfigContext';
export * from './contexts/TopicChaptersContext';
export { default as getTopicConfigFromPath } from './utils/getTopicConfigFromPath';
