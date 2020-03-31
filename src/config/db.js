const { Pool } = require('pg')

module.exports = new Pool({
  user: process.env.PG_USER || 'root',
  password: process.env.PG_PASS || 'postgres',
  host: process.env.PG_HOST || '172.18.0.2',
  port: process.env.PG_PORT || '5432',
  database: process.env.PG_DATABASE || 'gymmanager'
})