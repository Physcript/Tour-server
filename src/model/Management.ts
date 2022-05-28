import mongoose from "mongoose";


const managementSchema = new mongoose.Schema({
  uid: {
    type: String,
    ref: 'User'
  },
  role: Number
})

const Management = mongoose.model('Management', managementSchema)
export default Management
