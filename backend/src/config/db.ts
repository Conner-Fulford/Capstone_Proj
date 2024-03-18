import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: parseInt(process.env.DBPORT || "5432"),
  database: process.env.DB,
  ssl: { rejectUnauthorized: false },
});

export default pool;