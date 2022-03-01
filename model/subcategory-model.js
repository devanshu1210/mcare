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
   
   
   
   

})

//model 
let Subcategorymodel = mongoose.model("subcategory",subcategorySchema) //product

module.exports = Subcategorymodel 
