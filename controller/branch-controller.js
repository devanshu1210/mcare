const branch = require("branch-model")

//add logic
module.exports.addbranch = function(req,res){
    let branchname = req.body.branchname;
    let branchcontact = req.body.branchcontact;
    let branchaddress = req.body.branchaddress;
    

    let branch = new branchmodel({
        branchname : branchname,
        branchcontact : branchcontact,
        branchaddress : branchaddress
       
    })
    branch.save(function(err,success){
    if(err){
        res.json({msg:"something went wrong",data:err,status:-1})
    }else{
        res.json({msg:"successfullydone..",data:data,status:200})
    }
   })
}


 
module.exports.getAllbranch = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    branchmodel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles...",status:200,data:roles})

        }
    })
}
// /sdfdsfsdfdsf 
module.exports.deletebranch = function(req,res){
    let productId = req.params.roleId
    //delete from role where roleId = 1 
    branchmodel.deleteOne({"_id":branchId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}




module.exports.updatebranch = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let branchId = req.body.branchId 
    let branchName = req.body.branchName 

    categorymodel.updateOne({_id:branchId},{branchName:branchName},{branchcontact:branchcontact},{branchaddress:branchaddress},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}