const { User } = require("../Model/User.Model1");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: `User not found with id : ${id}` });
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      const data = await User.deleteOne({ _id: id });
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: `User not found with id : ${id}` });
    }
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      const data = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(201).json(data);
    } else {
      res.status(404).json({ message: `User not found with id : ${id}` });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
