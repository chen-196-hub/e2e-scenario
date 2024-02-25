const config = {
  paths: ['scenario/features/**/*.feature'],
  require: ['scenario/step/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: [
    'summary',
    'progress-bar',
  ],
  formatOptions: { snippetInterface: 'async-await' },
};

module.exports = {
 default: config
}