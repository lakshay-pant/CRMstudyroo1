const express=require("express")
const router=express.Router()

router.all("/",(req,res)=>{
    res.json({message:"hello student"})
})

module.exports=router