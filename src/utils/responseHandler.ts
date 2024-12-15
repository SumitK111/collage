

const response = (status:boolean,message:string,data:any[] | object)=>{
    return {
        status:status,
        message:message,
        data:data
    }
}

export default response