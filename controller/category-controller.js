const category = require("category-model")

//add logic
module.exports.addcategory = function(req,res){
    let categoryname = req.body.categoryname;
    let categorytype = req.body.categorytype;
    

    let category = new categorymodel({
        categorymodel : categorymodel,
        categorytype : categorytype
       
    })
    category.save(function(err,success){
    if(err){
        res.json({msg:"something went wrong",data:err,status:-1})
    }else{
        res.json({msg:"successfullydone..",data:data,status:200})
    }
   })
}


 
module.exports.getAllcategory = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    categorymodel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles...",status:200,data:roles})

        }
    })
}
// /sdfdsfsdfdsf 
module.exports.deletecategory = function(req,res){
    let productId = req.params.roleId
    //delete from role where roleId = 1 
    categorymodel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}




module.exports.updatecategory = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let categoryId = req.body.categoryId 
    let categoryName = req.body.categoryName 

    categorymodel.updateOne({_id:categoryId},{roleName:categoryName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}