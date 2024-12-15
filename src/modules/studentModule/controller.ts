import {registerStudent,loginStudent} from './services.js'
import {Hono} from "hono"


const studentRegister = async(c: { req: { json: () => any }; json: (arg0: { status: boolean; message: string; data: object | any[] }, arg1: number) => any })=>{
    try {
        const body = await c.req.json()
        
        const resp = await registerStudent(body)
        if(resp.status === true){
            return c.json(resp,201)
        }else{
            return c.json(resp,400)
        }
    } catch (error) {
       console.log(error);   
    }
}

const studentLogin = async (c: { req: { json: () => any; }; json: (arg0: { status: boolean; message: string; data: object | any[]; } | undefined, arg1: number) => any; })=>{
    try {
        const body = await c.req.json()
        const resp = await loginStudent(body.mobile)
        if(resp.status === true){
            return c.json(resp,201)
        }else{
            return c.json(resp,400)
        }
    } catch (error) {
        
    }
}

export {studentRegister,studentLogin}