const bcrypt = require("bcrypt")
const vendorModel = require("../model/vendor-model")


//add [ POST ]
module.exports.addvendor = function (req, res) {

    let vendorName = req.body.vendorName
    let vendoraddress = req.body.vendoraddress
    let vendorcontact = req.body.vendorcontact
    
    //encrypt 

    let encPassword = bcrypt.hashSync(password,10)

    let cityid = req.body.cityid
    let stateid = req.body.stateid


    let vendor = new vendorModel({
        vendorName: vendorName,
        vendorcontact: vendorcontact,
        vendoraddress: vendoraddress,
        cityid: cityid,
        stateid:stateid
    })



    vendor.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "successfully done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllvendor = function (req, res) {

    vendorModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "vendor ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deletevendor = function(req,res){
    //params userid 
    let vendorId = req.params.userId //postman -> userid 

    vendorModel.deleteOne({_id:vendorId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}


//update 
module.exports.updatevendor  = function(req,res){
    let paramvendorId = req.body.vendorId 
    let paramvendorname = req.body.vendorname
    let paramvendorcontact = req.body.vendorcontact
    let paramvendoraddress = req.body.vendoraddress 

    vendorModel.updateOne({_id:paramvendorId},{vendorname:paramvendorname,vendorcontact:paramvendorcontact,vendoraddress:paramvendoraddress},function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 })//http status code 
        }
    })

}

//login 


// module.exports.deletevendor = function(req,res){
//     let vendorId = req.params.vendorId
//     //delete from role where roleId = 1 
//     vendormodel.deleteOne({"_id":vendorId},function(err,data){
//         if(err){
//             res.json({msg:"Something went wrong!!!",status:-1,data:err})
//         }else{
//             res.json({msg:"removed...",status:200,data:data})
//         }
//     })
// }




