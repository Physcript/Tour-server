



import express from 'express'
import con from '../controller/post'
import createMiddleware from '../middleware/post/create'
import authMiddleware from '../middleware/auth'
const router = express.Router()

router.post('/create',authMiddleware,createMiddleware,con.create)

export default router
