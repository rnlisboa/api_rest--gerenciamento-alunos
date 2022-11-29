import { Router } from "express";
const router = new Router()
import alunoController from '../controllers/AlunoController'
import loginRequired from '../middlewares/loginRequired'


router.get('/', alunoController.index)
router.get('/:id', alunoController.show)

router.post('/', loginRequired, alunoController.store)
router.put('/:id', loginRequired,  alunoController.update)
router.delete('/:id', loginRequired,  alunoController.delete)

export default router