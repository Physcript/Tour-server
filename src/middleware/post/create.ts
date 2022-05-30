

import { Request,Response,NextFunction } from 'express'
import { IEPost } from '../../interface/post' 
import Post from '../../model/Post'


const create = async (req: Request, res: Response, next: NextFunction) => {
  const { title,body,img, tag } = req.body 
  const { uid } = res.locals.user

  const error_01 = check_user_input(title,body,img,tag)
  
  if(Object.keys(error_01).length >= 1)
    {
      res.status(400).json({
        error: error_01
      })
      return
    }

  const post = new Post({
    title,
    body,
    uid,
    img,
    tag,
    status: false
    
  }) 

  await post.save() 

  next()
  return
}

const check_user_input = ( title: string, body: string, img: object, tag: object ) => {
  const err: any = {} 

  const validate:IEPost = {
    Title: title,
    Body: body,
    Image: img,
    Tag: tag
  } 
  
  Object.entries(validate).forEach(([key,value]) => {
    if(typeof(value) === 'string')
      {

        if(value.trim() === '')
          {
            err[key] = `Require ${key}`
          }

      }
    else
      {
        if(value.length >= 1) 
          {
            value.forEach(( el:string ) => {
              if(el.trim() === '')
                {
                  err[key] = `Require ${key}`
                }
            })
          }
        else
          {
            err[key] = `Require ${key}`
          }
      }
  }) 

  return err
}

export default create
