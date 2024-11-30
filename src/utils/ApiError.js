class ApiError extends Error{
    constructor(
        message="something went wrong ",
        error=[],
        statusCode,
        stack=''
    ){
        super(message)
        this.message = message
        this.error= error
        this.statusCode = statusCode
        this.data= null 

        if(stack){
            this.stack= stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}