
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from './config'

import { createServer } from 'http'
import { Server } from 'socket.io'

// const
const app = express()
const httpServer = createServer(app)
const corsOption = { origin: 'http://localhost:3000', credential: true }

// use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOption))
app.use(cookieParser())

// cors
require('./config/config_cors')(app)
// middleware
require('./config/config_middleware')(app)
// io
require('./config/config_io')(httpServer)
// routes
require('./config/config_routes')(app)

// initialize

mongoose
  .connect(`${config.DATABASE.URL}`, config.DATABASE.OPTIONS)
  .then(() => console.log(`DATABASE CONNECTED`))
  .catch((err) => console.log(`${err} network error`))

httpServer.listen(config.SERVER.PORT, () => {
  console.log(`PORT: ${config.SERVER.PORT}`)
})
