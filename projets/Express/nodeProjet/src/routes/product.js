import express from "express";
import controller from "../controllers/product.js";
const router = express.Router();

router.get("/", controller.getAllProduct);
router.post("/", controller.addProduct);
router.put("/:id", controller.upDateProduct);
router.delete("/:id", controller.deleteProduct);
router.get("/:id", controller.getProductById);

export default router;
