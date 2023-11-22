import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/var.js"

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

const register = async (req, res) => {
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let NewUsers = new User(req.body);
   
    NewUsers.cart=[]
    console.log(JSON.stringify(NewUsers));
    await NewUsers.save();
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

const login = async (req,res) =>{
  if (!req.body.email) {
    res.status(400).json({ mesg: "need de passe username" });
  }else {
    const user = await User.findOne({ email: req.body.email })
   
    console.log(user);

    if (!user) {
      res.status(400).json({ mesg: "email not find" });
    } else {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(
          user.toJSON(),
          config.ACCESS_TOKEN_SECRET
        );
        res.status(200).json({ token: accessToken, user });
      } else {
        res.status(400).json({ mesg: "the passe word is bad" });
      }
    }
  }
}

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
  register,
  upDateUser,
  deleteUser,
  getUserById,
  login
};
