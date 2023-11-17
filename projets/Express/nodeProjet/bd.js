import mongoose, { connect } from "mongoose";
import vars from "./src/config/var.js";

function ConnectToBd()
{
    mongoose.connect(vars.urlBD);
    const db = mongoose.connection;
    db.on("error",(error)=>console.error(error))
    db.once("open",()=> console.log("data base connected"))
    return db ;
}
export default ConnectToBd; 