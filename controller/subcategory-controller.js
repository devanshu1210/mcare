const subcategory = require("subcategory-model")

//add logic
module.exports.addcategory = function(req,res){
    let subcategoryname = req.body.subcategoryname;
    let subcategorytype = req.body.subcategorytype;
    

    let subcategory = new subcategorymodel({
        subcategorymodel : subcategorymodel,
        subcategorytype : subcategorytype
       
    })
    subcategory.save(function(err,success){
    if(err){
        res.json({msg:"something went wrong",data:err,status:-1})
    }else{
        res.json({msg:"successfullydone..",data:data,status:200})
    }
   })
}


 
module.exports.getAllsubcategory = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    subcategorymodel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles...",status:200,data:roles})

        }
    })
}
// /sdfdsfsdfdsf 
module.exports.deletesubcategory = function(req,res){
    let productId = req.params.productId
    //delete from role where roleId = 1 
    subcategorymodel.deleteOne({"_id":productId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}




module.exports.updatesubcategory = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let subcategoryId = req.body.subcategoryId 
    let subcategoryName = req.body.subcategoryName 

    subcategorymodel.updateOne({_id:categoryId},{roleName:categoryName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}