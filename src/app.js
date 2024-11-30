import express from 'express'
import cors from 'cors '
import cookieParser from 'cookie-parser'
export const app = express()
app.use(cors({
    origin :process.env.CORS,
    credentials:true
}))

app.use(express.json({limit:'20kb'}))
app.use(cookieParser())

import {router} from './router/user.router.js'

app.use('/api/v1',router)