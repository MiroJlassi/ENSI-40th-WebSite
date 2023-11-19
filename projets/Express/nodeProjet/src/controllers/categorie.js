import Categorie from "../model/categorie.js";

const getAllCategorie = async (req, res) => {
  try {
    const Categories = await Categorie.find();
    console.log(JSON.stringify(Categories));
    res.status(200).json(Categories);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't find any Categorie");
  }
};

const addCategorie = async (req, res) => {
  try {
    console.log(req.body);
    const NewCategories = new Categorie(req.body);
    console.log(JSON.stringify(NewCategories));
    NewCategories.save();
    res.status(200).json(NewCategories);
  } catch (e) {
    console.log(e);
    res.status(400).json("can't add ");
  }
};

const deleteCategorie = async (req, res) => {
  try {
    const delCategorie = await Categorie.findOneAndDelete({
      _id: req.params.id,
    });
    console.log(delCategorie);
    res.status(200).json({ msg: "deleted" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant delete" });
  }
};

const upDateCategorie = async (req, res) => {
  try {
    const upCategorie = await Categorie.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(upCategorie);
    res.json(upCategorie);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant update" });
  }
};

const getCategorieById = async (req, res) => {
  try {
    const Categorie = await Categorie.findById(req.params.id);
    res.json(Categorie);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "not find" });
  }
};
export default {
  addCategorie,
  getAllCategorie,
  upDateCategorie,
  deleteCategorie,
  getCategorieById,
};
