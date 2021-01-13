import { TopicKey, pathPrefixToTopicKey } from '@pelicin/config';

export default function getTopicKeyFromPath(path: string): TopicKey {
  // `match` is null || [prefixKey, topicKey]
  const match = Object.entries(pathPrefixToTopicKey).find(([pathPrefix]) =>
    path.startsWith(pathPrefix)
  );

  if (match) {
    return match[1];
  } else {
    return 'default';
  }
}
