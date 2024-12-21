import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {} from './config/dbConfig.js'
import * as dotenv from 'dotenv'
import config from './config/envConfig.js'

dotenv.config()
// console.log(process.env.DB);
import student from './modules/studentModule/routes.js'


const app = new Hono()
// console.log(app);

app.route("/api/v1/student", student);
app.notFound((c) => c.json({ status:false,message: "Not Found" }, 404));
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port:number= config.PORT
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
