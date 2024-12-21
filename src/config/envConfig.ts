import * as dotenv from 'dotenv'

dotenv.config()
import envData from "./stage.json" with { type: 'json' }
let config:{}={}
const configg = ()=>{
    
    if(process.env.NODE_ENV == "stage"){
        config = envData
    }else{
        config = envData
    }
}
configg()
export default config