import {Hono} from "hono"
import {studentRegister,studentLogin} from "./controller.js"
const student = new Hono()

student.post("/register",studentRegister)
student.post("login",studentLogin)


export default student