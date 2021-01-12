import { ReactNode } from 'react';
import { TopicConfigMap } from '@pelicin/config';

// ================================================================================
// TOPIC
// ================================================================================

export type TopicKey = keyof typeof TopicConfigMap;

export type TopicConfig = {
  topicTitle: string;
  topicDescription: string;
  mainColor: string;
  accentColor: string;
  basePath: string;
  chapters: TopicChapters;
};

// ================================================================================
// TOPIC GROUP
// ================================================================================

export type TopicGroup = {
  groupTitle: string;
  groupDescription: string;
};

// ================================================================================
// TOPIC CHAPTER
// ================================================================================

export type TopicChapter = {
  chapter: string | ReactNode;
  children: Array<{
    title: string | ReactNode;
    path: string;
  }>;
};

export type TopicChapters = Array<TopicChapter>;
