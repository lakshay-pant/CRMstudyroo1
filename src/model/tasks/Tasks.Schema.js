const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const taskSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
      },
      TaskName: {
    type: String,
    maxlength: 50,
    
  },
  cars: {
    type: String,
    maxlength: 50,
  
  }, DueDate: {
    type: String,
    maxlength: 50,
    
  },
  Taskdetails: {
    type: String,
    maxlength: 50,
    required: true,
  },
  student: {
    type: String,
    maxlength: 50,
    required: true,
  },
  usergroup: {
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
  taskSchema: mongoose.model("tasks", taskSchema),
};
