import { createContext } from 'react';

export * from './types';

// ================================================================================
// CONSTANTS
// ================================================================================

export { default as pathPrefixToTopicKey } from './constants/pathPrefixToTopicKey';
export { default as pathPrefixToURL } from './constants/pathPrefixToURL';

// ================================================================================
// TOPICS
// ================================================================================

export { default as DefaultTopic } from './topic-config/default';
export { default as SampleTopic } from './topic-config/sample';

// ================================================================================
// GROUPS
// ================================================================================

export { default as SampleGroup } from './groups/sample';

// ================================================================================
// UTILS
// ================================================================================

export * from './contexts/TopicConfigContext';
export * from './contexts/TopicChaptersContext';
export { default as getTopicKeyFromPath } from './utils/getTopicKeyFromPath';
export { default as getBasePathFromPath } from './utils/getBasePathFromPath';
