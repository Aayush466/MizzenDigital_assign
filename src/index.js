import {connectDB} from './db/index.js'
import dotenv from 'dotenv '
import {app} from './app.js'
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT)
    console.log(`server is connected to ${process.env.PORT}`)
})
.catch((error)=>{
    console.log("their is connection error to server ",error )
})