import { Request,Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config/'
import { _IUser } from '../../interface/user'

export default async (req: Request, res: Response, next: NextFunction) => {
  
  const token = req.headers.token

  const user: _IUser = await new Promise ( function(resolve,reject) {
      jwt.verify(`${token}`,`${config.PASSWORD.TOKEN}`, function (err: any,decoded: any) {
        if(err)
          {
            res.status(401).json({
              error: 'Invalid action'
            })
            return
          }
        else
          {
            resolve(decoded)
            return
          }
      })
    })

  res.locals.user = user
  
  next()
  return
}


