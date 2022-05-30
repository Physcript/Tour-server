



import express from 'express'
import con from '../controller/post'
import createMiddleware from '../middleware/post/create'
import authMiddleware from '../middleware/auth'
import validateMiddleware from '../middleware/auth/main'

const router = express.Router()

router.post('/create',authMiddleware,validateMiddleware,createMiddleware,con.create)

export default router
