import express, { Express } from 'express';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app: Express = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(postRoutes);

export default app;