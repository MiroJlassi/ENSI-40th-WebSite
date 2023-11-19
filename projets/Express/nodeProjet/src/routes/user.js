import express from "express";
import controller from "../controllers/user.js";
import authenticateToken from "../middleWare/authenticat.js"
import upload from "../middleWare/upLoadImage.js"
const router = express.Router();

router.get("/",authenticateToken ,controller.getAllUser);
router.post("/", upload.array("file"),controller.register);
router.put("/:id", controller.upDateUser);
router.delete("/:id", controller.deleteUser);
router.get("/:id", controller.getUserById);
router.post("/login",controller.login)
export default router;
