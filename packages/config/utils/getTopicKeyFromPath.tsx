import { TopicConfigMap, TopicKey } from '@pelicin/config';

export default function getTopicKeyFromPath(path: string): TopicKey {
  let result: TopicKey = 'default';

  for (const topicKey in TopicConfigMap) {
    const { basePath } = TopicConfigMap[topicKey];
    if (path.startsWith(basePath + '/')) {
      result = topicKey as TopicKey;
      break;
    }
  }

  return result;
}
