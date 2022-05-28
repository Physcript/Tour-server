import bcrypt from 'bcrypt'
import { NextFunction, Request,Response } from 'express'
import { check_login_email, create_login_token, get_login_role } from './main'


const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email,password } = req.body
  const user = await check_login_email(email)
  
  if(user === null)
    {
      res.status(400).json({
        error: 'Invalid email/password'
      })
      return
    }
  const isMatch = await check_login_password(password, user.password)
  
  if(!isMatch)
    {
      res.status(400).json({
        error: 'Invalid email/password'
      })
      return
    }

  
  //login 
  
  const role = await get_login_role(user.uid)
  const _user = await {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    uid: user.uid,
    token: '',
    role,
  } 

  const token = await create_login_token(_user) 
  
  res.locals.user = _user
  res.locals.token = token
  

  // saving token
  user.token = token
  await user.save()


  next()
  return
}


const check_login_password = async (password: string, _password: string) => {
  
  return await bcrypt.compare(password,_password)

} 

export default login
