import express from 'express'
import tareas from './router/tareas'
require('dotenv').config()
const app = express()
app.use(express.json())

const api = process.env.API_URL

if(api){
    app.use(api, tareas)
}

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})