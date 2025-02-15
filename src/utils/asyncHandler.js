

export const asyncHandler = (fn)=>async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }catch(error){
        res
        .status(error.status || 401)
        .json({
            message:error.message,
            success:false
        })
    }
}