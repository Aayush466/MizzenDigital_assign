class ApiResponse {
    constructor(statusCode , data , message = "something went wrong "){
        this.statusCode = statusCode 
        this.data = data 
        this.message= message 
    }
}

export {ApiResponse }