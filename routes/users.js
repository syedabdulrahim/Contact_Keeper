const express=require('express');
// const user=require('../models/Users');
const { body, validationResult } = require('express-validator');
const Users = require('../models/Users');
// const { Model } = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config')

const router=express.Router();

//@route  POST api/users
//@desc   Register a user
//@access PUBLIC

router.post('/',[
    body('name','Please add your name')
    .not()
    .isEmpty(),
    body('email','Please add your email-ID').isEmail(),
    body('password','Please enter a password with 7 or more charecters').isLength({min:6})
    

], async (req,res)=>{

    // resp.send('Registers a user');
    const errors=validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({error:errors.array()})
    }

    const {name,email,password}=req.body;

    try{
        let user= await Users.findOne({email})
        if(user){

           return res.status(400).json({msg:"User Already Exists"})
        }
     user= new Users({name,email,password});
     console.log(user)
    const salt=  await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(password,salt);

    await user.save()

    const payload={
        user:{
            id:user.id
        }
    }

    jwt.sign(payload,config.get('jwtSecret'),{
        expiresIn:360000 
    },(err,token)=>{
        if(err) throw err;
        res.json({token})
    })

    // res.send("Sucessful")
    }
    catch(error){

        console.log(error.message);
        res.status(500).json({"error":"something wrong"})
    }

    
})

module.exports=router;