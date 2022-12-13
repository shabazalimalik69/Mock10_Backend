const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = ()=>{
    return mongoose.connect("mongodb+srv://shabaz:7051@cluster0.nwa7yiv.mongodb.net/mock10")
    .then(()=>console.log("Successfully Connected"))
    .catch((err)=>{
        console.log(err)
    }
    )
}
module.exports = connectDB