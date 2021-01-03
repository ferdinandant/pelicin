import { TopicConfigMap, TopicKey } from '@pelicin/config';

export default function getTopicKeyFromPath(path: string): TopicKey {
  let result: TopicKey = 'test';

  for (const topicKey in TopicConfigMap) {
    const { baseURL } = TopicConfigMap[topicKey];
    if (path.startsWith(baseURL + '/')) {
      result = topicKey as TopicKey;
      break;
    }
  }

  return result;
}
