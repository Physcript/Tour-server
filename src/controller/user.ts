
import { Request,Response } from 'express'

export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        postId: res.locals.postId ?? ''
      }
    })
    res.locals.postId = ''
    return
  }),

  login: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        user: res.locals.user,
        token: res.locals.token
      }
    })
    
    res.locals.user = undefined
    res.locals.token = undefined

    return
  })
}
