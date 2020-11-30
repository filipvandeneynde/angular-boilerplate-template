import { version } from '../../package.json';

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: true,
  version: `${version}`,
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
