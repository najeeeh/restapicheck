const mongoose = require ("mongoose")
const validator = require ("validator")
//Create the shema 
const userSchema = new mongoose.Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    age : {
        type: Number,
        dafault : 0,
        validate(value){
            if (value<0){
                throw new Error("Age can not be less then 0")
            }
        }
    },
    address : {type:String},
    password : {
        type : String,
        minlength : 7,
        validate(value){
            if (value.toLowerCase().includes("passeword"))
                throw new Error("passeword cannot contain passeword")
        }
    },
    email : {
        type : String,
        unique : true,
        lowerCase : true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    } ,
},{timestamps : true 

})

//Create a modele for the shema created
const User = mongoose.model("User", userSchema)
module.exports = User
