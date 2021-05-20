const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
      },
      
  userName: {
    type: String,
    maxlength: 50,
    
  },
  firstName: {
    type: String,
    maxlength: 50,
    
  },
  birthday: {
    type: String,
    maxlength: 50,
    required:true,
    
  },
   middleName: {
    type: String,
    maxlength: 50,
  
  }, lastName: {
    type: String,
    maxlength: 50,
    
  },
  
  nationality: {
    type: String,
    maxlength: 50,
    
  },
  gender: {
    type: String,
    maxlength: 50,
    
  },
  
onShorePhone: {
    type: Number,
    maxlength: 11,
    

  },
offShorePhone: {
    type: Number,
    maxlength: 11,
    
  },
leadLevel: {
    type: String,
    maxlength: 50,
    
  },
email: {
    type: String,
    maxlength: 50,
    
  },onShoreLocation: {
    type: String,
    maxlength: 50,
    
  },offShoreLocation: {
    type: String,
    maxlength: 50,
    
  },locationStatus: {
    type: String,
    maxlength: 50,
    
  },refferalSource: {
    type: String,
    maxlength: 50,
    required: true,
    
  },
  addedAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = {
  LeadSchema: mongoose.model("Lead", LeadSchema),
};