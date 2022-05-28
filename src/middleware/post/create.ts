

import { Request,Response,NextFunction } from 'express'

const create = (req: Request, res: Response, next: NextFunction) => {
  
  console.log('creating')
  

  next() 
  return
}


export default create
