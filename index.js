const express = require("express");
const mongoose = require("mongoose");
const sessionController = require("./");
const roleController = require("./controller/role-controller");
const userController = require("./controller/user-controller");
const productController =require("./controller/product-controller")
const categoryController =require("./controller/category-controller")
const subcategoryController=require("./controller/subcategory-controller")
const vendorController=require("./controller/vendor-controller")
const branchController=require("./controller/branch-controller")


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/mcare", function (err) {
  //mongoose sathe connection karavyu
  //error set and display the connectivity
  if (err) {
    console.log("data connection failed");
    console.log(err);
  } else {
    console.log("database connected");
  }
});

//urls

app.get("/",function(req,res){
    res.write("welcome..")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//role
app.get("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleID",roleController.deleterole)
app.put("/roles",roleController.updateRole)


//user
app.post("/users",userController.addUser)
app.get("/signup",userController.getAllUsers)
app.delete("/saveuser",userController.deleteUser)
app.put("/saveuser",userController.updateUser)
app.post("/login",userController.login)

//product
app.post("/product",productController.addproduct)
app.get("/product",productController.getAllUproduct)
app.delete("/product",productController.deleteproduct)
app.put("/product",productController.updateproduct)


//category
app.post("/category",categoryController.addcategory)
app.get("/category",categoryController.getAllUcategory)
app.delete("/category",categoryController.deletecategory)
app.put("/category",categoryController.updatecategory)

//subcategory
app.post("/subcategory",subcategoryController.addsubcategory)
app.get("/subcategory",subcategoryController.getAllUsubcategory)
app.delete("/subcategory",subcategoryController.deletesubcategory)
app.put("/subcategory",subcategoryController.updatesubcategory)



//vendor
app.post("/vendor",vendorController.addvendor)
app.get("/vendor",vendorController.getAllUvendor)
app.delete("/vendor",vendorController.deletevendor)
app.put("/vendor",vendorController.updatevendor)


//city



//branch
app.post("/branch",branchController.addbranch)
app.get("/branch",branchController.getAllUbranch)
app.delete("/branch",branchController.deletebranch)
app.put("/branch",branchController.updatebranch)








//server
app.listen(3000,function(){
    console.log("server started on 3000");
})