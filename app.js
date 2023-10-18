import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import router from './src/routes/user_routes.js'
import { db_conecction } from './src/config/database.js';

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

//rutas de autenticación

app.use('/auth',router);




//connect to database
db_conecction();

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})