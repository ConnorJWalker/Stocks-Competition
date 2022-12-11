import { Router } from 'express'
import AuthenticationController from '../controllers/authentication-controller'

const router = Router()
const authenticationController = new AuthenticationController()

router.post('/signup', authenticationController.Signup)

export default router
