const mongoose=require("mongoose")
const Schema=mongoose.Schema
const bcrypt=require("bcrypt")

const UserSchema=new Schema({
    name:{
        type:String,
        maxlength:50,
        required:true
    },
    company:{
        type:String,
        maxlength:50,
        required:true
    },
    address:{
        type:String,
        maxlength:50,
        
    },
    phone:{
        type:Number,
        maxlength:11,
        },
    email:{
        type:String,
        maxlength:50,
        required:true,
        unique:true
    },
    password:{
        type:String,
        maxlength:100,
        minlength:8,
        required:true
    }

     

})

UserSchema.pre("save",async function(next){
    const user=this
    if(user.isModified("password")){
        user.password=await bcrypt.hash(user.password,10)
    }
    
    next()  
})

module.exports={
    UserSchema:mongoose.model("User",UserSchema)
}