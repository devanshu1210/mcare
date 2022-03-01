const fs = require("fs")

function login(req,res){
    res.write("Login")
    res.end()
}

function signup(req,res){
    let signupHtml = fs.readFileSync("./views/index.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res){

    console.log(req.body)//

    res.json({
        msg:"done danadone....",
        status:200,
        data:req.body
    })
}
//export karave to use anywhere it is needed
module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveuser 
 

