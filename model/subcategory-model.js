const mongoose = require("mongoose")


//schema 
let subcategorySchema = new mongoose.Schema({
    subcategoryName:{
        type:String,
        require:true,
        ref:"category"
    },
   subcategorytype:{
       type:String,
       require:true
   },
   category : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"category"
}
   
   

})

//model 
let subcategoryModel = mongoose.model("category",subcategorySchema) //product

module.exports = subcategorymodel 
