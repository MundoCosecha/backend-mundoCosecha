import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

import { enviroments } from './src/config/environments.js';
import { db_conecction } from './src/config/database.js'
import userRoutes from './src/routes/user.routes.js'

import './src/models/user_model.js'

const app = express();


//middleware
app.use(express.json());
app.use(cors({
    origin:'*',
    methods:['GET', 'POST']
}));    
app.use(helmet());
app.use(morgan('dev'));

//rutas de autenticación

app.use('/auth',userRoutes);
app.use('/api/users', userRoutes);



//connect to database
db_conecction();

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${enviroments.PORT}`);
})