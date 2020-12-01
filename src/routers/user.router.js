const express=require("express")
const router=express.Router()
const {insertUser}=require("../model/user/User.model")

router.all("/",(req,res,next)=>{

    
    next()
})

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

module.exports=router