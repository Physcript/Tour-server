import mongoose from 'mongoose'

const userScehma = new mongoose.Schema({
  firstName: {
    type: String,
    lowercase: true,
    trim: true
  },
  lastName: {
    type: String,
    lowercase: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  password: String,
  uid: String,
  token: String
}, { timestamps: true })

const User = mongoose.model('User', userScehma)
export default User
