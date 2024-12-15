import { sign } from "hono/jwt"

const generateToken = async (data:{}) => {
    try {
        console.log(data);
        
        const tc = await sign(data,"dfsfjeng")
        console.log(tc);
        
        return tc
    } catch (error) {
        console.log(error);
        
    }
}

export {generateToken}