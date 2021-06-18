const Mycol=require('./schema.js')

//delete operation
const deleteDocument=async (_id)=>{
    const result = await Mycol.deleteOne({_id});  //delte typescript from collection
}
module.exports=deleteDocument;