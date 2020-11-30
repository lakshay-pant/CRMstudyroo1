const express=require("express")
const router=express.Router()

router.all("/",(req,res)=>{
    res.json({message:"hello ticket"})
})

module.exports=router