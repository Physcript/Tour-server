import { Request, Response } from "express";

export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'post created'
    })
    return
  }),
  view: ((req: Request, res: Response) => {
    res.status(200).json({
      message:  {
        post: res.locals.post
      }
    })
    res.locals.post = undefined
    return
  }),
  upload: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        upload: {
          url: res.locals.url,
          public_id: res.locals.public_id
        }
      }
    })
    res.locals.url = undefined
    res.locals.public_id = undefined
    return
  })
}
