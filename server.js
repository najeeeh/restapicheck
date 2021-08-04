const nodemon = require('nodemon')
const express = require ('express')
const app = express()
require ('./db/Connection')
 const userRouter = require ('./router/User')
const port = 4000
app.use(express.json())
 app.use(userRouter)

app.listen(port, ()=>{
    console.log("server is up on port " + port)
})