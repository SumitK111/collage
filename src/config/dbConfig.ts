import {connect} from 'mongoose'
import * as dotenv from 'dotenv'
import config from './envConfig.js'


const uri:string = config.DB as string
connect(uri, {})
  .then(() => console.log('DB Connected!'));