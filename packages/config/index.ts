export * from './types';

// ================================================================================
// CONSTANTS
// ================================================================================

export { default as pathPrefixToTopicConfig } from './constants/pathPrefixToTopicConfig';

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
