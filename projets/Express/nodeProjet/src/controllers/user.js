import User from "../model/user.js";

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    console.log(JSON.stringify(users));
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't find any user");
  }
};

const addUser = async (req, res) => {
  try {
    console.log(req.body);
    
    let NewUsers = new User(req.body);
    NewUsers.cart=[]
    console.log(JSON.stringify(NewUsers));
    NewUsers.save();
    res.status(200).json(NewUsers);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't add ");
  }
};

const deleteUser = async (req, res) => {
  try {
    const delUser = await User.findOneAndDelete({ _id: req.params.id });
    console.log(delUser);
    res.status(200).json({ msg: "deleted" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant delete" });
  }
};

const upDateUser = async (req, res) => {
  try {
    const upUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(upUser);
    res.json(upUser);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant update" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("cart");
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "not find" });
  }
};

export default {
  getAllUser,
  addUser,
  upDateUser,
  deleteUser,
  getUserById,
};
