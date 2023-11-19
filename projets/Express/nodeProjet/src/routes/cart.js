import express from "express";
import controller from "../controllers/cart.js";

const router = express.Router();

router.get("/", controller.getAllCart);
router.put("/:id", controller.upDateCart);
router.delete("/:id", controller.deleteCart);
router.get("/:id", controller.getCartById);

export default router;
