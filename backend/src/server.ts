import dotenv from 'dotenv';
import app from './app';
import db from './config/db';

dotenv.config();

const port: string | number = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});