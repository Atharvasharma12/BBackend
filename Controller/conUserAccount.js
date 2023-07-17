const newUserModel = require('../mongoose/userModel')


const userAccount = async(req , res) =>{

    const {userId} = req.body;
    console.log("userId");

    if(userId){
        const usersProducts = await newUserModel.findOne({_id : userId}).populate("products")
        const up = await usersProducts.products
    
       console.log(up)
    
        res.send(up)
    }

    else res.send([])


}

module.exports = userAccount