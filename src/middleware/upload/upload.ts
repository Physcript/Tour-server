
import { Request,Response,NextFunction } from 'express'


const fs = require('fs')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')


cloudinary.config({
  cloud_name: 'dnnq8kne2',
  api_key: '711294436262969',
  api_secret: 'CnBFRYCGRZjN36Y4JGnC5tfA_Ic'
})


const upload = async (req: Request, res: Response, next: NextFunction)  => {
  
  const img = req.files
  let urls:any = await getUrl(img)
  
  
  res.locals.url = urls.url
  res.locals.public_id = urls.public_id

  next()
}


const getUrl = async (files: any) => {
  // try {

  // const uploader = async (path: any) => await cloudinary.uploader.upload(path,'Images')
  // const url = []
  const file = files[0]
   
  return new Promise(( resolve,reject ) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: 'Tour'
      },
      (error: any, result: any) => {
        if(result) {
          resolve(result)

        }
        else {
          reject(error)
        }
      }
    );

    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream)
  })

}

export default upload
