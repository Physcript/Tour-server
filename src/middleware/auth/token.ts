import { Request,Response,NextFunction } from 'express'



  
export default (req: Request, res: Response, next: NextFunction) => {
  
  const token = req.headers.token
  console.log(token)
  next()
  return
}


