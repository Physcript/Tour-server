

import { Request, Response, NextFunction } from 'express'

export default  (req: Request, res: Response, next: NextFunction) => {
  const { _uid, email } = req.body

  const user = res.locals.user

  if( _uid === user.uid  && email === user.email)
    {
      next()
      return
    }
  else
    {
      res.status(401).json({
        error: 'Unauthorized'
      })
      return
    }
}
