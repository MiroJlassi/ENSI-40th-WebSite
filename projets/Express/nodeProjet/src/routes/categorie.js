import express from "express";
import controller from "../controllers/categorie.js";

const router = express.Router();

router.get("/", controller.getAllCategorie);
router.post("/", controller.addCategorie);
router.put("/:id", controller.upDateCategorie);
router.delete("/:id", controller.deleteCategorie);
router.get("/:id", controller.getCategorieById);

export default router;
