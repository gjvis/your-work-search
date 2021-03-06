const config = require('../../db/knexfile.js');
module.exports = {

  development: Object.assign(
    {
      seeds: {
        directory: './chef',
      },
    },
    config.development
  ),

  test: Object.assign(
    {
      seeds: {
        directory: './chef',
      },
    },
    config.test
  ),

  production: Object.assign(
    {
      seeds: {
        directory: './chef',
      },
    },
    config.production
  ),
};
