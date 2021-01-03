import { ReactNode } from 'react';
import { TopicConfigMap } from '@pelicin/config';

// ================================================================================
// TOPIC
// ================================================================================

export type Topic = keyof typeof TopicConfigMap;

export type TopicConfig = {
  mainColor: string;
  accentColor: string;
  chapters: TopicChapters;
};

export type TopicChapter = {
  chapter: string | ReactNode;
  children: Array<{
    title: string | ReactNode;
    url: string;
  }>;
};

export type TopicChapters = Array<TopicChapter>;
