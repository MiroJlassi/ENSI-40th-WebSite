import mongoose, { mongo } from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mail: {
    type: String,
  },
  password: {
    type: String,
  },
  cart : { type: mongoose.Schema.Types.ObjectId, ref: "cart " },
});
export default mongoose.model("user", usersSchema);
