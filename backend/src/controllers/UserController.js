
import User from "../models/User";
class UserController{
    
    
    //criar
    async store(req, res){
        try{
            const novoUser = await User.create(req.body)
            const { id, nome, email } = novoUser 
            return res.json({id, nome, email})
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }

    //mostrar todos
    async index(req, res){
        try {
            const usuarios = await User.findAll({attributes: ['id', 'nome', 'email']})
            
            return res.json(usuarios)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: 'Ainda não há nenhum usuario cadastrado.'
                });
        }
    }

    //mostrar um
    async show(req, res){
        try{
            const { id } = req.params

            if(!id){
                return res.status(400).json({
                    errors: ['Selecione um usuário.']
                })
            }

            const user = await User.findByPk(id)
            
            if(!user){
                return res.json({
                    errors: ['Usuário não cadastrado.']
                })
            }

           const {nome, email} = user
            return res.json({id, nome, email})
            
        } catch(e){
            console.log(e)
            return res.json(null);
        }
    }

    //atualizar um
    async update(req, res){
        try{
            
            const user = await User.findByPk(req.userId)
            if(!user){
                return res.status(400).json({
                    errors: ['Usuário não existe.']
                })
            }
            
            const updatedUser = await user.update(req.body)

            const {id, nome, email } = updatedUser
            return res.json({id, nome, email})
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }

    //deletar um
    async delete(req, res){
        try{
            
            const user = await User.findByPk(req.userId)
            
            if(!user){
                return res.status(400).json({
                    errors: ['Usuário não existe.']
                })
            }

            await user.destroy()
            return res.json(user)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }
    
    
}

export default new UserController();