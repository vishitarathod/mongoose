const Mycol=require('./schema.js')

//reading the data
const getDocument=async()=>{
    const result=await Mycol.find()
    console.log(result)
}
module.exports=getDocument;