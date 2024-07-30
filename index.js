require('dotenv').config()
const express = require('express')
const app = express();

const port = 4000

app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${port}`)
})

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/login',(req,res)=>{
    res.send('Please do logginng here')
})