import mongoose from 'mongoose'
import bcrypt from 'bcrypt '
import jwt from 'jsonwebtoken'
const userSChema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
        index:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        index:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required "]
    },
    refreshToken:{
        type:String,
        required:true
    }
})

userSchema.pre('save', async function (next){
    if(!this.isModified("password")) return next()
        this.password = await bcrypt.hash(this.password , 10)
        next()
})

userSchema.methods.isPasswordCorrect= async function (password){
          return await bcrypt.compare(password,this.password)
}
userSchema.methods.AccessToken = function(){
    jwt.sign({
        _id:this._id,
        userName:this.username
    },process.env.ACCESS_TOKEN_SECRET,
    {
        expireIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.RefreshToken = function(){
    jwt.sign({
        _id:this._id,
    },process.env.REFRESH_TOKEN_SECRET,
    {
        expireIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User = mongoose.model("User",userSchema)