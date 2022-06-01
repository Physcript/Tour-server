import { NextFunction, Request, Response } from "express"
import { publicPost } from "./main"



const view = async (req: Request, res: Response, next: NextFunction) => {
  
  const post = await publicPost()
  res.locals.post = post
  next()
  return
} 


export default view
