const express = require("express");
const {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controllers/User.Controller1");

const Router = express.Router();

Router.route("/").post(createUser).get(getAllUser);
Router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

module.exports = Router;
