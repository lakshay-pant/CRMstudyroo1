const express=require("express")
const router=express.Router()

router.all("/",(req,res)=>{
    console.log(name)
    res.json({message:"hello user"})
})

module.exports=router