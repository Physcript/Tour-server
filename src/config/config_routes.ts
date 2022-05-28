

import { Express,Request,Response,NextFunction } from 'express'
import userRoutes from '../routes/user'
import postRoutes from '../routes/post'

module.exports = (app: Express) => {
  app.use('/api/u', userRoutes)
  app.use('/api/p', postRoutes)

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not Found'
    })
  })
  return
}
