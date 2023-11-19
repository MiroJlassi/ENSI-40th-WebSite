import mongoose from "mongoose"


const categorieSchema=mongoose.Schema({
    name:{
        type:String 
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product " }],

})
export default mongoose.model("categorie", categorieSchema);
