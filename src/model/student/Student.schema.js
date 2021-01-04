const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
      },
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  nationality: {
    type: String,
    maxlength: 50,
    required: true,
  },
  
  phone: {
    type: Number,
    maxlength: 11,
  },
  email: {
    type: String,
    maxlength: 50,
    required: true,
  },
});

module.exports = {
  StudentSchema: mongoose.model("Student", StudentSchema),
};