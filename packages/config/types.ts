import { ReactNode } from 'react';
import { TopicConfigMap } from '@pelicin/config';

// ================================================================================
// TOPIC
// ================================================================================

export type TopicKey = keyof typeof TopicConfigMap;

export type TopicConfig = {
  mainColor: string;
  accentColor: string;
  basePath: string;
  chapters: TopicChapters;
};

export type TopicChapter = {
  chapter: string | ReactNode;
  children: Array<{
    title: string | ReactNode;
    path: string;
  }>;
};

export type TopicChapters = Array<TopicChapter>;
