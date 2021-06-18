const mongoose=require("mongoose");

//For connection and create db
mongoose.connect("mongodb://localhost:27017/mydb",{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err));


 // define a schema
const mycolSchema=new mongoose.Schema({
    name:String,
    videos:Number
});

const Mycol=new mongoose.model("mycol",mycolSchema);

//insert one data...
const mongooseName=new Mycol({
    name:"mongoose",
    videos:70
});

mongooseName.save();

//insert multiple document...
const createDocument=async()=>{
    try{
        const jsName=new Mycol({
            name:"js",
            videos:20
        })
        const typescriptName=new Mycol({
            name:"typescript",
            videos:50
        })

        const result=await Mycol.insertMany([jsName,typescriptName])

    }
    catch(err){
        console.log(err);
    }
}
createDocument();

//reading the data
const getDocument=async()=>{
    const result=await Mycol.find({name:"js"})
    console.log(result)
}
getDocument();

//update operation
const updateDocument=async (_id)=>{
    const result=await Mycol.updateOne({_id},{$set:{name:"java"}});  // name change from mongoose to java

}
updateDocument("60cc1d068a7fcd7b0c16d759"); //unique id of mongoose 

//delete operation
const deleteDocument=async (_id)=>{
    const result = await Mycol.deleteOne({_id});  //delte typescript from collection
}
deleteDocument("60cc1f8b4fed608513384e67") // id of typescript