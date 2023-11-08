const env = process.env.CYPRESS_ENV || 'staging'; // Use process.env to access environment variables
const config = require(`./${env}.json`);
module.exports = config;