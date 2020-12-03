const mongoose=require("mongoose")
const Schema=mongoose.Schema
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const {setJWT,getJWT}=require("../../helper/jwt.redis")

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
    } ,
    refreshT: {
        token: {
          type: String,
          maxlength: 500,
          default: "",
        },
    
      },

     

})

UserSchema.pre("save",async function(next){
    const user=this
    if(user.isModified("password")){
        user.password=await bcrypt.hash(user.password,10)
    }
    
    next()  
})

UserSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({email})

    if(!user){
        throw new Error("Unable login")
    }
    const ismatch=await bcrypt.compare(password,user.password)
    if(!ismatch){
        throw new Error("Unable login")
    }
    return user
}

UserSchema.methods.generateAcessToken=async function(){
    try{
        const user=this
        const accessJWT=jwt.sign({_id:user._id.toString()},process.env.JWT_ACCESS_SECRET,{expiresIn:'15m'})
        await setJWT(accessJWT, user._id.toString())
        return Promise.resolve(accessJWT)
    }
        catch(e){ return Promise.reject(e)}
    
    

   
}

UserSchema.methods.generateRefreshToken=async function(){
    const user=this
    const refreshJWT=jwt.sign({_id:user._id.toString()},process.env.JWT_ACCESS_SECRET,{expiresIn:'30d'})
    
    await user.save()
    return refreshJWT
}

const User=mongoose.model("User",UserSchema)

    module.exports=User