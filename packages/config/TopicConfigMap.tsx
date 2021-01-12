import { SampleTopic, TopicConfig, DefaultTopic } from '@pelicin/config';

const TopicConfigMap: Record<string, TopicConfig> = {
  sample: SampleTopic,
  default: DefaultTopic,
};

export default TopicConfigMap;
