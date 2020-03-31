const { Pool } = require('pg')

module.exports = new Pool({
  connectionString: 'postgres://rlkometlkwafhc:8a7c8fe1ecd0683f85d5b1a9df66834b8e51b6554430b8fb410927c770bbb731@ec2-54-247-89-181.eu-west-1.compute.amazonaws.com:5432/d4umr0psoe2n2r?ssl=true'
  // user: process.env.PG_USER || 'root',
  // password: process.env.PG_PASS || 'postgres',
  // host: process.env.PG_HOST || '172.18.0.2',
  // port: process.env.PG_PORT || '5432',
  // database: process.env.PG_DATABASE || 'gymmanager'
})