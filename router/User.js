const express = require ("express")
const { findById } = require("../models/User")
const User = require ("../models/User")
const router = new express.Router()
//1-Get:return all users
router.get('/users',async(req,res)=>{
    try {
        const users = await User.find()
        console.log("All user :", users)
        res.status(200).json({
            users : users,
            massage: "Users found successfully"
        })
    } catch (error) {
        res.status(404).send()
    }
})
//2-POST :  ADD A NEW USER TO THE DATABASE 
router.post("/users", async(req,res)=>{
    console.log("--in Port user:" ,req.body)
    const user =new User(req.body)
    console.log(user)
    try {
        console.log(req.body)
        await user.save(function(err,data){
            console.log(err)
            console.log(data)
        })
        res.status(201).send({user})
    } catch (error) {
        console.log("error : " , error)
    }
})
//3.PUT : EDIT A USER BY ID 
router.put('/users/:id', async (req, res) => {
    try {
        const userFound = await User.findOne({_id: req.params.id})
        console.log("userFound: ",userFound )
        if(!userFound){
            res.status(404).json({
                message: "Object with these information doesn't exist",
                data: {}
            })
        }
        await User.findOneAndUpdate({_id: req.params.id}, req.body)
        res.status(200).json({
            message: "Updatedsuccessfully",
            data: {}
        })
    } catch (e) {
        res.status(500).send()
    }
})
//4-DELETE : REMOVE A USER BY ID 
router.delete('/users/:id', async (req,res) =>{
    try {
        const userFound = await User.findOne({_id: req.params.id})

        if(!userFound){
            res.status(404).json({
                message: "Object with these information doesn't exist",
                data:{}
            })
        }
        await userFound.remove()
        res.status(200).json({
            message: "Deleted successfully",
            data: {}
        })
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router