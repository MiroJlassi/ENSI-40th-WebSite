import mongoose, { mongo } from "mongoose";

const usersSchema = new mongoose.Schema({
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

});
export default mongoose.model("user", usersSchema);
