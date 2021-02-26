const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
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
  
  onshorePhone: {
    type: Number,
    maxlength: 11,
  },
  OffshorePhone: {
    type: Number,
    maxlength: 11,
  },
  salesPipeline: {
    type: String,
    maxlength: 50,
    required: true,
  },
  salesStatus: {
    type: String,
    maxlength: 50,
    required: true,
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
  },note: {
    type: String,
    maxlength: 100,
    required: true,
  },
});

module.exports = {
  StudentSchema: mongoose.model("Student", StudentSchema),
};