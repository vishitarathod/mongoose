const Mycol=require('./schema.js')

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

module.exports=createDocument;