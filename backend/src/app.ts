import express, { Application } from 'express';
import authRoutes from './routes/authRoutes';
import helmet from 'helmet';
import cors from 'cors';

const app: Application = express();

app.use(helmet());
app.use(authRoutes);
app.use(express.json());
app.use(cors());

export default app;