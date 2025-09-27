import cors from 'cors'
import express from 'express'
import { configDotenv } from 'dotenv';
import { indexRouter } from './routes';
import { MongooseClient } from './config/db/MongooseClient';

configDotenv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(indexRouter);

MongooseClient.connect(process.env.DATABASE_URL);

export default app;