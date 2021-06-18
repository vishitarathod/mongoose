const mongoose=require("mongoose");
const createDocument=require('./insert.js')
const updateDocument=require('./update.js')
const getDocument=require('./read.js')

//For connection and create db
mongoose.connect("mongodb://localhost:27017/mydb",{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err));


//insert the data
createDocument();

//reading the data
getDocument();

//update the data
updateDocument("60cc1d068a7fcd7b0c16d759"); //unique id of mongoose 

//delete the data
deleteDocument("60cc1f8b4fed608513384e67") // id of typescript