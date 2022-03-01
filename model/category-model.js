const mongoose = require("mongoose")


//schema 
let CategorySchema = new mongoose.Schema({
    categoryname:{
        type:String,
        require:true,
        ref:"category"
    },
   categorytype:{
       type:String,
       require:true
   }
   
   

})

//model 
let CategoryModel = mongoose.model("category",CategorySchema) //product

module.exports = CategoryModel 
