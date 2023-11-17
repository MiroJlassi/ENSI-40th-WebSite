import express from "express";
import ConnectToBd from "./bd.js";
import userRouter from "./src/routes/user.js";
import productRouter from "./src/routes/product.js";

import cors from "cors";

const app = express();
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(express.json());
app.use(cors(corsOpts));
app.use("/user", userRouter);
app.use("/product", productRouter);


ConnectToBd();
try {
  app.listen(3000, () => {
    console.log("using port 3000");
  });
} catch (e) {
  console.log(e);
}
