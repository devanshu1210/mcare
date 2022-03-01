const mongoose = require("mongoose")


//schema 
let branchSchema = new mongoose.Schema({
    branchName:{
        type:String,
        require:true,
    
    },
   branchaddress:{
       type:String,
       require:true
   },
   branchcontact:{
       type:String,
       require:true
   }

})

//model 
let branchModel = mongoose.model("branch",branchSchema) 

module.exports = branchModel 

