



import express from 'express'
import con from '../controller/post'
import createMiddleware from '../middleware/post/create'
import authMiddleware from '../middleware/auth'
import validateMiddleware from '../middleware/auth/main'
import viewMidddleware from '../middleware/post/view'
import uploadMiddleware from '../middleware/upload/upload'
import multer from 'multer'

const router = express.Router()

//
// authMiddleware checking token to save user in res.locals.user

// validateMiddleware uid email from req.body check in res.locals.user
//
//
const upload = multer()

router.post('/create',upload.array('img'),authMiddleware,validateMiddleware,createMiddleware,con.create)
router.post('/upload',upload.array('img'),uploadMiddleware, con.upload)
router.post('/view',viewMidddleware,con.view)


export default router
