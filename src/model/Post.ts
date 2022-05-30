import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({

  title: {
    type: String,
    lowercase: true,
  },
  body: {
    type: String 
  },
  img: {
    type: [String]
  },
  status: {
    type: Boolean
  },
  uid: {
    type: String,
    ref: 'User'
  },
  tag: {
    type: [String],
    lowecase: true
  }

}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post
