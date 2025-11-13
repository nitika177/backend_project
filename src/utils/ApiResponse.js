class ApiResponse{
    constructor(statuscode,data,message="Success"){
        this.statusCode=statuscode
        this.data=data
        this.message=message
        this.success=this.statuscode<400
    }
}