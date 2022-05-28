

import express from 'express'
import con from '../controller/user'
import createMiddleware from '../middleware/user/create'
import loginMiddleware from '../middleware/user/login'

const router = express.Router()

router.post('/create',createMiddleware,con.create)
router.post('/login',loginMiddleware,con.login)

export default router
