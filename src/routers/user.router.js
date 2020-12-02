const { json } = require("body-parser")
const express=require("express")
const router=express.Router()
const {insertUser}=require("../model/user/User.model")
const User=require("../model/user/User.schema")

router.all("/",(req,res,next)=>{

    
    next()
})

//sign up

router.post("/",async(req,res)=>{
    try{  
        const result=await insertUser(req.body)
        console.log(result)
        res.json({message:"new user created",result})

    }catch(error){
        console.log(error)
        res.json({status:"error",message:error.message})
    }
    
  
})

//login

router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.json({status:"error",message:"Invalid form submission"})
    }
    try{ 
    const user=await User.findByCredentials(email,password)
    res.status(201).send(user)}
    catch(e){
        console.log(e)
        res.status(400).json({status:"error",message:error.message})
    }
   
})

module.exports=router