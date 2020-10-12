const express=require('express');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const Users = require('../models/Users');
const auth=require('../middleware/auth');

const router=express.Router();

//@route  GET api/AUTH
//@desc  GET Logged User
//@access PRIVATE

router.get('/',auth,async (req,resp)=>{

    try{
    const user= await Users.findById(req.user.id).select('-password');
    resp.status(200).json({user})
    // console.log({user})
    }
    catch(err){
        console.log(err);
        resp.status(500).send("Server Error")
    }
    // resp.send('GEt logged in User')
})





//@route  POST api/AUTH
//@desc    Auth user and get token
//@access PUBLIC    

router.post('/',[
    body('email','Please enter a valid email').isEmail(),
    body('password','Please enter a password with more than 6 charecters').exists()

], async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({error:errors.array()})
    }

    const {email,password}=req.body;

    try{

        let user=await Users.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Invalid Credentials"})
        }

        let isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"})
        }


        const payload={
            user:{
                id:user.id
            }
        }
    
        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn:360000 
        },(err,token)=>{
            if(err) {throw err}
             else {res.json({token})}
        })

    }
    catch(error){

        console.log(error);
        console.log("mann")
        res.status(500).send("Server Error")
    }
    
})

module.exports=router;