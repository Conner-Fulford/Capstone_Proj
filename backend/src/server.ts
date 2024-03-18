import dotenv from 'dotenv';
import app from './app';
import db from './config/db';

dotenv.config();

const port: string | number = process.env.PORT || 8080;

app.get('/api/test', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});