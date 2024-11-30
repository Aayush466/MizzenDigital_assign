import mongoose from 'mongoose '

export const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mizzen')
        console.log("MongoDb is connected ")
    }catch(error){
        console.log("error while connecting to database ",error)
        process.exit(1)
    }
}