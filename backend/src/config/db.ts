import dotenv from 'dotenv';

dotenv.config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DB
});

module.exports = {
    query: (text: any, params: any) => pool.query(text, params)
  };