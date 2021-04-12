const express = require("express");
const mongoose = require("mongoose")

bodyParser = require('body-parser').json();


const router = express.Router();
const User = mongoose.model('user');

mongoose.set('useCreateIndex', true);


router.post('/createUser',async(req,res)=>
{
 
 const {email,password} = req.body;

  try{
 const user = new User ({email,password});
 await user.save();
 res.send("User Created")
  }
  catch(err){
      res.status(422).send(err.message)
      console.log(req.body)
  }

 
 
 res.send("User Created")
}    
)

router.post('/signin',async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).send({error:"1.Must Provide Email and Password"})

    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error:"2.Must Provide Email and Password"})
    }
    try{
        await user.compPassword(password);
        res.send("Success")
        
    }catch(err){
        return res.status(422).send({error:"Check Your Password and email"})
        
    }
  

})

module.exports = router