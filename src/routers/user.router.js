const express=require("express")
const router=express.Router()
const {insertUser}=require("../model/user/User.model")
const {hashPassword}=require("../helpers/bcrypt.helper")

router.all("/",(req,res,next)=>{

    
    next()
})

router.post("/",async(req,res)=>{
    const{name,company,address,email,phone,password}=req.body
    try{  
        //hash password
        const hashedPass=hashPassword(password)

        const newUserObj={name,company,address,email,phone,password:hashedPass,}

        
        const result=await insertUser(newUserObj)
        console.log(result)
        res.json({message:"new user created",result})

    }catch(error){
        console.log(error)
        res.json({status:"error",message:error.message})
    }
    
  
})

module.exports=router