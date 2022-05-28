
import validator from 'validator'
import bcrypt from 'bcrypt'

import User from '../../model/User'

import { check_dupplicate_email,create_encrypt,create_uid } from './main'
import { Request,Response,NextFunction } from 'express'
import { IEUser } from '../../interface/user'
import Management from '../../model/Management'

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName,lastName,email,password,confirmPassword } = req.body
   
  const err_01 = await check_valid_input(req)
  const err_02 = await check_valid_email(email)
  const err_03 = await check_valid_password(password,confirmPassword) 
  
  const err = {
    ...err_01,
    ...err_02,
    ...err_03
  }

  if(Object.keys(err).length >= 1) 
    {
      res.status(400).json({
        error: err
      })
      return
    }


  const uid = await create_uid()
  const enc = await create_encrypt(password)
  
  const user = new User({
    firstName,
    lastName,
    email,
    password: enc,
    uid,
  })  
  
  const management = new Management({
    uid,
    role: 0
  })

  await user.save()
  await management.save()


  next()
  return
}

const check_valid_input = async (req: Request) => {
  const err: any = { }

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  } = req.body
  
  const validate:IEUser = {
    Firstname: firstName,
    Lastname: lastName,
    Email: email,
    Password: password,
    ConfirmPassword: confirmPassword
  }

  Object.entries(validate).forEach(([key,value]) => {
    if(value.trim() === '')
      {
        err[key] = `Require ${ key }`
      }
  })
  
  return err

}

const check_valid_email = async (email: string) => {
  const err: any = {}
  email = email.toLowerCase().trim()

  if(await check_dupplicate_email(email))
    {
      err['Email'] = 'Email already exist'
    }
  else
    {
      if(validator.isEmail(email))
        {

        }
      else
        {
          err['Email'] = 'Email invalid'
        }
    }

  return err
}

const check_valid_password = (password: string, confirmPassword: string) => {
  
  const err: any = {}

  if(password !== confirmPassword)
    {
      err['Password'] = 'Password not match'
    }
  if(password.includes(' '))
    {
      err['Password'] = 'Invalid password'
    }
  if(password.length <= 7 || confirmPassword.length <= 7)
    {
      err['Password'] = `Minimum of 8 password characters`
    }


  return err
}

export default create
