const { Pool } = require('pg')

module.exports = new Pool({
  user:'root',
  password: 'postgres',
  host: '172.18.0.2',
  port: '5432',
  database: 'gymmanager'
})