import Cart from "../model/cart.js";

const getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    console.log(JSON.stringify(carts));
    res.status(200).json(carts);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't find any Cart");
  }
};

const addCart = async (req, res) => {
  try {
    console.log(req.body);
    const Newcarts = new Cart(req.body);
    console.log(JSON.stringify(Newcarts));
    Newcarts.save();
    res.status(200).json(Newcarts);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't add ");
  }
};

const deleteCart = async (req, res) => {
  try {
    const delCart = await Cart.findOneAndDelete({ _id: req.params.id });
    console.log(delCart);
    res.status(200).json({ msg: "deleted" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant delete" });
  }
};

const upDateCart = async (req, res) => {
  try {
    const upCart = await Cart.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(upCart);
    res.json(upCart);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant update" });
  }
};

const getCartById = async (req, res) => {
  try {
    const Cart = await Cart.findById(req.params.id);
    res.json(Cart);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "not find" });
  }
};
export default {
  getAllCart,
  upDateCart,
  deleteCart,
  getCartById,
};
