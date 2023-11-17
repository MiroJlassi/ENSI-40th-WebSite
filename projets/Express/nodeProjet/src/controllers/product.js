import Product from "../model/product.js";

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(JSON.stringify(products));
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't find any Product");
  }
};

const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const NewProducts = new Product(req.body);
    console.log(JSON.stringify(NewProducts));
    NewProducts.save();
    res.status(200).json(NewProducts);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't add ");
  }
};

const deleteProduct = async (req, res) => {
try{
    const delProduct= await Product.findOneAndDelete({_id:req.params.id})
    console.log(delProduct)
    res.status(200).json({ msg: "deleted" });
}
catch(e)
{
    console.log(e);
    res.status(404).json({ msg: "cant delete" });
}


};

const upDateProduct = async (req, res) => {

    try{
        const upProduct = await Product.findOneAndUpdate({_id:req.params.id},req.body)
        console.log(upProduct)
        res.json(upProduct);

    }
    catch(e)
    {
        console.log(e);
        res.status(404).json({ msg: "cant update" });
    }

};

const getProductById = async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id)
    res.json(Product);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "not find" });
  }
};





export default {
  getAllProduct,
  addProduct,
  upDateProduct,
  deleteProduct,
  getProductById,

};
