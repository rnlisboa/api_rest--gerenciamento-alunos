import Sequelize, { Model } from 'sequelize'


export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já cadastrado.'
                },
                validate: {
                    len: {
                        args: '',
                        msg: 'Insira um e-mail'
                    },
                    isEmail: {
                        msg: 'E-mail inválido'
                    }
                }
            },
            idade: Sequelize.INTEGER,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT
        }, {
            sequelize
        });
        return this
    }

    static associate(models){
        this.hasMany(models.Foto, {foreignKey: 'aluno_id'})
    }
}