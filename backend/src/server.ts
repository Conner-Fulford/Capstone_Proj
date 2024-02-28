import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

// Functionality
const authRoutes = require("./routes/authRoutes");
const app: Application = express();
const db: any = require('./config/db');
const port: string | number = process.env.PORT || 8080;

// Security
const helmet = require('helmet');
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use(session({
    name: "authCookie",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: false,
      maxAge: 60000
    }
  })
);
app.use(cookieParser());
app.use('/', authRoutes);


app.get('/test', async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});