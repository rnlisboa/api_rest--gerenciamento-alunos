import { Router } from "express";
const router = new Router()
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'


router.get('/', userController.index); //Lista todos os usuários
router.get('/:id', userController.show); //Lista um usuário

router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);


export default router