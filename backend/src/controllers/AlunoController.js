import Aluno from "../models/Alunos";
import Foto from '../models/Fotos'
class AlunoController {
    
    async index(req, res) {
        try {
            const alunos = await Aluno.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
                include: {
                    model: Foto,
                    attributes: ['url','filename']
                }
            })
            if(alunos.length == 0){
                return res.json({
                    errors: ['Ainda não há nenhum aluno cadastrado.']
                })
            }
            res.json(alunos)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: 'Não há alunos.'
                });
        }
    }

    async store(req, res) {
        try {
            const novoAluno = await Aluno.create(req.body)
            res.json(novoAluno)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }

    

    async show(req, res) {
        try {
            const { id } = req.params
            if(!id){
                return res.status(400).json({
                    errors: ['Selecione um aluno.']
                })
            }
            const aluno = await Aluno.findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
                include: {
                    model: Foto,
                    attributes: ['url','filename']
                }
            })

            if(!aluno){
                return res.json({
                    errors: ['Aluno não cadastrado.']
                })
            }

            return res.json(aluno)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            if(!id){
                return res.json({
                    errors: ['Selecione um aluno.']
                })
            }
            const aluno = await Aluno.findByPk(id)

            if(!aluno){
                return res.json({
                    errors: ['Aluno não cadastrado.']
                })
            }

            const alunoUpdated = await aluno.update(req.body)
            return res.json(alunoUpdated)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            if(!id){
                return res.json({
                    errors: ['Selecione um aluno.']
                })
            }
            const aluno = await Aluno.findByPk(id)

            if(!aluno){
                return res.json({
                    errors: ['Aluno não cadastrado.']
                })
            }

            await aluno.destroy()
            res.json(aluno)
        } catch(e){
            console.log(e)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
                });
        }
    }
}

export default new AlunoController();