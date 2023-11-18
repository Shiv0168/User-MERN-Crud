const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Name required !!!"],
      unique: [true, "Name already registered unique name required !!!"],
    },
    email: {
      type: String,
      required: [true, "Email required !!!"],
      unique: [true, "Email already registered unique Email required !!!"],
    },
    password: {
      type: String,
      required: [true, "Password required !!!"],
      unique: [
        true,
        "Password already registered unique Password required !!!",
      ],
    },
  },
  { timestamps: true }
);

exports.User = mongoose.model("User", userSchema);
