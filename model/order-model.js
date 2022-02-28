const mongoose = require("mongoose")


//schema 
let ordercategorySchema = new mongoose.Schema({
    orderName:{
        type:String,
        require:true,
        ref:"category"
    },
 
   

ordername
productid
productname
productprice
categoryid
subcategoryid
vendorid
branchid
userid

})

//model 
let subcategoryModel = mongoose.model("order",orderSchema) //product

module.exports = ordermodel 
