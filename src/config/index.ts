require('dotenv').config()


export default {
  SERVER: {
    PORT: process.env.PORT || 1337, 
    URL: 'localhost'
  },
  DATABASE: {
    URL: 'mongodb://127.0.0.1:27017/tour',
    OPTIONS: {
      useUnifiedTopology: true,
      wtimeoutMS: 50000,
      maxPoolSize: 50
    }
  },
  PASSWORD: {
    TOKEN: process.env.LOGIN_TOKEN  
  }
}
