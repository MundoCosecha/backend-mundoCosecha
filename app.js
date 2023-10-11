import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { db_conecction } from './src/config/database.js';

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));


//connect to database
db_conecction();

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on htpp://localhost:${port}`);
})