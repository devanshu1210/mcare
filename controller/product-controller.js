const product = require("product-model")

//add logic
module.exports.addproduct = function(req,res){
    let productname = req.body.productname;
    let productbrand = req.body.productbrand;
    let mfgdate = req.body.mfgdate;
    let expdate = req.body.expdate;
    let productprice = req.body.productprice;

    let product = new productmodel({
        productmodel : productmodel,
        productbrand : productbrand,
        mfgdate: mfgdate,
        expdate : expdate,
        productprice : productprice
    })
    product.save(function(err,success){
    if(err){
        res.json({msg:"something went wrong",data:err,status:-1})
    }else{
        res.json({msg:"successfullydone..",data:data,status:200})
    }
   })
}


 
module.exports.getAllproduct = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    productmodel.find().populate("category").populate("subcategory").exec(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles...",status:200,data:roles})

        }
    })
}
// /sdfdsfsdfdsf 
module.exports.deleteproduct = function(req,res){
    let productId = req.params.roleId
    //delete from role where roleId = 1 
    productmodel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}




module.exports.updateproduct = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let productId = req.body.productId 
    let productName = req.body.productName 

    productmodel.updateOne({_id:productId},{roleName:rproductame},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}