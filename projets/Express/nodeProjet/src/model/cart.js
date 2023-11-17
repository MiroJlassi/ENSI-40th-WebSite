import mongoose, { mongo } from "mongoose";
import product from "./product";

const cartsSchema = new mongoose.Schema({
  totalPrice: {
    type: String,
  },

  products: [
    { product: { type: mongoose.Schema.Types.ObjectId, ref: "cart " } },
    { number: { type: Number } },
  ],
});
export default mongoose.model("cart", usersSchema);
