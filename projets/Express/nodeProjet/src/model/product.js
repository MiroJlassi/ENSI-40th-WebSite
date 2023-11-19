import mongoose, { mongo } from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price : {
    type: Number,
  },
  image : {
    type: String,
  },
  description : {
    type: String,
  },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "cart " }],

});
export default mongoose.model("product", productsSchema);
