const mongoose = require("mongoose")//Use Mongoose Package
require("dotenv").config()//Use .env Variables
//DB creation and connexion
const MONGODB_URL = `mongodb://${process.env.DATABASE_HOST}:
${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
console.log(MONGODB_URL)

mongoose.connect(MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
