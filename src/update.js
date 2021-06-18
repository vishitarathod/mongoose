const Mycol=require('./schema.js')

//update operation
const updateDocument=async (_id)=>{
    const result=await Mycol.updateOne({_id},{$set:{name:"java"}});  // name change from mongoose to java

}
module.exports=updateDocument;