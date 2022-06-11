


import mongoose from 'mongoose'


const imageSchema = new mongoose.Schema({
  url: [String],
  public_id: [String],
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }

})

const Image = mongoose.model('Image', imageSchema)

export default Image
