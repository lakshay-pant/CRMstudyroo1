const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
      },
  taskName: {
    type: String,
    maxlength: 50,
    
  },
   type: {
    type: String,
    maxlength: 50,
  
  }, dueDate: {
    type: String,
    maxlength: 50,
    
  },
  studentAssign: {
    type: String,
    maxlength: 50,
    required: true,
  },
  Assigner: {
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
  taskSchema: mongoose.model("task", taskSchema),
};