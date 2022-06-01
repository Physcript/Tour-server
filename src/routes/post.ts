



import express from 'express'
import con from '../controller/post'
import createMiddleware from '../middleware/post/create'
import authMiddleware from '../middleware/auth'
import validateMiddleware from '../middleware/auth/main'
import viewMidddleware from '../middleware/post/view'

const router = express.Router()

//
// authMiddleware checking token to save user in res.locals.user

// validateMiddleware uid email from req.body check in res.locals.user
//
//

router.post('/create',authMiddleware,validateMiddleware,createMiddleware,con.create)
router.post('/view',viewMidddleware,con.view)


export default router
