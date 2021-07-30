import { TopicConfig } from '@pelicin/config';

type CoreTopicConfig = Omit<TopicConfig, 'basePath'>;

/**
 * Maps `basePath` (e.g. '/web/html') to topic config
 *
 * `topicKey` refers to the path inside 'chapters'
 *
 * `mainColor` is picked from https://github.com/ozh/github-colors
 * `accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
 */
const map: Record<string, CoreTopicConfig> = {
  // --------------------------------------------------------------------------------
  // Web
  // --------------------------------------------------------------------------------

  '/web/html': {
    topicKey: 'web/html',
    topicTitle: 'HTML',
    mainColor: '#e34c26',
    accentColor: '#d43560',
  },
  '/web/css': {
    topicKey: 'web/css',
    topicTitle: 'CSS',
    mainColor: '#563d7c',
    accentColor: '#9f4a84',
  },
  '/web/svg': {
    topicKey: 'web/svg',
    topicTitle: 'SVG',
    mainColor: '#ff9900',
    accentColor: '#ff675b',
  },
  '/web/http': {
    topicKey: 'web/http',
    topicTitle: 'HTTP',
    mainColor: '#3e4c59',
    accentColor: '#3e4c59',
  },

  // --------------------------------------------------------------------------------
  // Sample & default
  // --------------------------------------------------------------------------------

  '/sample': {
    topicKey: 'sample',
    topicTitle: 'Sample',
    mainColor: '#65737e',
    accentColor: '#5992a0',
  },
  '/': {
    topicKey: 'default',
    topicTitle: '',
    mainColor: '#3e4c59',
    accentColor: '#3e4c59',
  },
};

export default map;
