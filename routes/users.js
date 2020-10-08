const express=require('express');
const user=require('../models/Users');
const { body, validationResult } = require('express-validator');

const router=express.Router();

//@route  POST api/users
//@desc   Register a user
//@access PUBLIC

router.post('/',[
    body('name','Please add your name')
    .not()
    .isEmpty(),
    body('email','Please add your email-ID').isEmail(),
    body('password','Please enter a password with 7 or more charecters').isLength({min:7})
    

],(req,res)=>{

    // resp.send('Registers a user');
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({error:errors.array()})
    }

    else{
        res.status(200).json({status:"OK"})
    }
    console.log(req.body);
    resp.send(req.body);

})

module.exports=router;