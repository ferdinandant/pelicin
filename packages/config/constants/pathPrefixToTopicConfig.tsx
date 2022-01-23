import { TopicConfig } from '@pelicin/config';

type CoreTopicConfig = Omit<TopicConfig, 'basePath'>;

/**
 * Maps `basePath` (e.g. '/web/html') to topic config
 * - `topicKey` refers to the path inside 'chapters'
 * - `mainColor` is picked from https://github.com/ozh/github-colors
 * - `accentColor` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
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
    mainColor: '#005c9c',
    accentColor: '#0084b8',
  },

  // --------------------------------------------------------------------------------
  // Programming
  // --------------------------------------------------------------------------------

  '/prog/js': {
    topicKey: 'prog/js',
    topicTitle: 'JavaScript',
    mainColor: '#f1e05a',
    accentColor: '#96cc69',
  },
  '/prog/cpp': {
    topicKey: 'prog/cpp',
    topicTitle: 'C++',
    mainColor: '#f34b7d',
    accentColor: '#c75097',
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
    mainColor: '#6f7788',
    accentColor: '#6f7788',
  },
};

export default map;
