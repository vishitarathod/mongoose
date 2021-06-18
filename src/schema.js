const mongoose=require("mongoose");

 // define a schema
 const mycolSchema=new mongoose.Schema({
    name:String,
    videos:Number
});

const Mycol=new mongoose.model("mycol",mycolSchema);

module.exports=Mycol;