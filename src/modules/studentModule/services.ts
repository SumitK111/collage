import Student from "./model.js"
import response from "../../utils/responseHandler.js"
import { generateToken } from "../../middleware/auth.js"




const registerStudent = async (data:object)=>{
    try {
        const studentReg = await Student.create(data)

        return response(true,"Student registered successfully!!",studentReg)
    } catch (error) {
        return response(false,"Student registeration fail",[])
    }
}

const loginStudent = async (mobile:string)=>{
    try {
        console.log(typeof mobile);
        
        const data = await Student.findOne({mobile:mobile})
        // console.log(JSON.stringify(data));
        
        const token = await generateToken({"name":"Sumit","mobile":"8533943758","email":"Sumit@gamil.com"})
        console.log(token);
        
        return response(true,"token generated successfully",{token:token})
    } catch (error) {
      console.log(error);
      return response(false,"Student login fail",[])
    }
}

export {registerStudent,loginStudent}