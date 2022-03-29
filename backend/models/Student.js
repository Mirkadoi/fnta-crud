const mongoose = require("mongoose");

const { Schema } = mongoose;
const studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);
module.exports = mongoose.model("Student", studentSchema);
