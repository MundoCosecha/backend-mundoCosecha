import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import router from './src/routes/user_routes.js'
import { db_conecction } from './src/config/database.js';

const app = express();
dotenv.config();

import http from 'http';
const httpServer = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(httpServer);


//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

//rutas de autenticación

app.use('/auth',router);

// Escuchar conexiones entrantes
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');
  
    
  
    socket.on('disconnect', () => {
      console.log('Un usuario se ha desconectado');
    });
  });


//connect to database
db_conecction();

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
