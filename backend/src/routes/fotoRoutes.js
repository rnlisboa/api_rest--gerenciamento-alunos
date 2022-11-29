import { Router } from "express";
const router = new Router()
import FotoController from "../controllers/FotoController";
import loginRequired from '../middlewares/loginRequired'


router.post('/', loginRequired,FotoController.store)

export default router