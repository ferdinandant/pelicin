import { ReactNode } from 'react';

// ================================================================================
// TOPIC
// ================================================================================

export type TopicKey = string;

export type TopicConfig = {
  topicKey: TopicKey;
  basePath: string;
  topicTitle: string;
  mainColor: string;
  accentColor: string;
};

// ================================================================================
// TOPIC GROUP
// ================================================================================

export type TopicGroup = {
  groupTitle: string;
  groupDescription: string | ReactNode;
  groupHash: string;
  sections: Array<{
    sectionTitle?: string;
    sectionDescription?: string | ReactNode;
    topics: Array<{
      title: string;
      path: string;
      description?: string | ReactNode;
    }>;
  }>;
};

export type TopicGroups = Array<TopicGroup>;

// ================================================================================
// TOPIC CHAPTER
// ================================================================================

export type TopicChapter =
  | {
      chapter: string | ReactNode;
      children: Array<{
        title: string | ReactNode;
        path: string;
      }>;
    }
  | {
      '@separator': string;
    };

export type TopicChapters = Array<TopicChapter>;
