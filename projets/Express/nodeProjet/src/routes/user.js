import express from "express";
import controller from "../controllers/user.js";
const router = express.Router();

router.get("/", controller.getAllUser);
router.post("/", controller.addUser);
router.put("/:id", controller.upDateUser);
router.delete("/:id", controller.deleteUser);
router.get("/:id", controller.getUserById);

export default router;
