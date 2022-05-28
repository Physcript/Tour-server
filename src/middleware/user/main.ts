import bcrypt from 'bcrypt'
import config from '../../config'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

import User from '../../model/User'
import Management from '../../model/Management'
import { IUser } from '../../interface/user'

export const check_dupplicate_email = async (email: string) => {
  if(await User.findOne({ email }))
    {
      return true
    }
  return false
}

export const check_login_email = async (email: string) => {
  const user = await User.findOne({ email })
  if(user !== null)
    {
      return user
    }
  return null
}
export const get_login_role = async (uid: string) => {
  const role = await Management.findOne({ uid })
  return role.role ?? 0
}
export const create_uid = async () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
export const create_encrypt = async (password: string) => {
  return await bcrypt.hash(password,8) 
}

export const create_login_token = async (user: IUser) => {
  return await jwt.sign(user,`${config.PASSWORD.TOKEN}`)
}
