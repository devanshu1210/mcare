const mongoose = require("mongoose")


//schema 
let CategorySchema = new mongoose.Schema({
    CategoryName:{
        type:String,
        require:true,
        ref:"category"
    },
   Categorytype:{
       type:String,
       require:true
   }
   
   

})

//model 
let CategoryModel = mongoose.model("category",CategorySchema) //product

module.exports = Categorymodel 
