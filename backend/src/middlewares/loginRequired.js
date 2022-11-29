import jwt from 'jsonwebtoken'
import { where } from 'sequelize';
import User from '../models/User'
export default async (req, res, next) => {
    const { authorization } = req.headers;


    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required'],
        })
    }
    const token = authorization.split(' ')[1]

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados

        //SE O USUARIO EDITAR OS DADOS, A LÓGICA OBRIGARÁ A LOGAR DE NOVO
        const user = await User.findOne({
            where: {
                id,
                email
            }
        })

        if(!user){
            return res.status(401).json({
                errors: ['Usuario expirado.'],
            })
        }

        req.userId = id;
        req.userEmail = email

        return next()
    } catch (e) {
    
        return res.status(401).json({
            errors: ['Token expirado ou inválido'],
        })
    }


}