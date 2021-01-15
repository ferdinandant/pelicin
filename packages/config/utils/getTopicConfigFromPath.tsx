import { TopicConfig, pathPrefixToTopicConfig } from '@pelicin/config';

const defaultTopicConfig = pathPrefixToTopicConfig['/'];

export default function getTopicConfigFromPath(path: string): TopicConfig {
  const match = Object.entries(pathPrefixToTopicConfig).find(([pathPrefix]) =>
    path.startsWith(pathPrefix)
  );

  if (match) {
    const [basePath, topicConfig] = match;
    return { basePath, ...topicConfig };
  } else {
    return { basePath: '/', ...defaultTopicConfig };
  }
}
