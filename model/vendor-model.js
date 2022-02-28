const mongoose = require("mongoose")


const VendorSchema = new mongoose.Schema({
    
        vendorName:{
            type:String,
            required:true
        },
        vendoraddress:{
            type:String
        },
        vendorcontact:{
            type:Number
        },
        cityid : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"city"
        },
        stateid :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"state"
        }
})


const vendorModel = mongoose.model("vendor",vendorSchema)
module.exports = vendorModel 


