const mongoose = require("mongoose")


//schema 
let ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
   
    productbrand:{
        type:String,
        require:true
    },
    mfgdate:{
        type:Date,
        require:true
    },
    expdate:{
        type:Date,
        require:true//require for making it mandatory
    },
    productprice:{
        type:Number,
        require:true
    }

})

const ProductModel = mongoose.model("product",ProductSchema)
module.exports = ProductModel 