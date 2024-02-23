import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app: Application = express();
const db: any = require('./config/db');
const port: string | number = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});