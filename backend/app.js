import dotenv from 'dotenv'
dotenv.config();
import './src/database'
import express from "express";
import cors from 'cors';
import helmet from 'helmet'
import alunoRoutes from './src/routes/alunoRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import fotoRoutes from './src/routes/fotoRoutes'
import { resolve } from 'path'

const whiteliste = [
    'http://localhost:3000'
]

const corsOptions = {
    origin: function(origin, callback){
        if(whiteliste.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes()
    }

    middlewares() {
        this.app.use(cors(corsOptions))
        this.app.use(helmet())
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json())
        this.app.use(express.static(resolve(__dirname, 'uploads')))

    }

    routes() {
        this.app.use('/alunos/', alunoRoutes);
        this.app.use('/users/', userRoutes)
        this.app.use('/tokens/', tokenRoutes)
        this.app.use('/fotos/', fotoRoutes)
    }
}

export default new App().app;