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
   middleName: {
    type: String,
    maxlength: 50,
  
  }, lastName: {
    type: String,
    maxlength: 50,
    
  },
  birthday: {
    type: String,
    maxlength: 50,
    required: true,
  },
  nationality: {
    type: String,
    maxlength: 50,
    required: true,
  },
  gender: {
    type: String,
    maxlength: 50,
    required: true,
  },nationality: {
    type: String,
    maxlength: 50,
    required: true,
  },
  
onShorePhone: {
    type: Number,
    maxlength: 11,
    

  },
offShorePhone: {
    type: Number,
    maxlength: 11,
    
  },
heatLevel: {
    type: String,
    maxlength: 50,
    required: true,
  },
email: {
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