import {connect} from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const uri = process.env.DB as string
connect(uri, {})
  .then(() => console.log('DB Connected!'));