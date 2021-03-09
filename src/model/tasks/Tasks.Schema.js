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
  assignTo: {
    type: String,
    maxlength: 50,
    required: true,
  },
  userGroups: {
    type: String,
    maxlength: 50,
    required: true,
  },
  offices: {
    type: String,
    maxlength: 50,
    required: true,
  },
  
  
});

module.exports = {
  taskSchema: mongoose.model("task", taskSchema),
};