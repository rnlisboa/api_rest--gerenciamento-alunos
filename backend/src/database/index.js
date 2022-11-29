import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Alunos';
import User from '../models/User';
import Foto from '../models/Fotos'

const models = [Aluno, User, Foto]
const connection = new Sequelize(databaseConfig)

models.forEach((model)=>model.init(connection))
models.forEach((model)=>model.associate && model.associate(connection.models))


