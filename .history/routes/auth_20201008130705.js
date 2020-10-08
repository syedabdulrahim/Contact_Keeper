const express=require('express');

const router=express.Router();

//@route  GET api/AUTH
//@desc  GET Logged User
//@access PRIVATE

router.get('/',(req,resp)=>{

    resp.send('GEt logged in User')
})





//@route  POST api/AUTH
//@desc    Auth user and get token
//@access PUBLEC

router.get('/',(req,resp)=>{

    resp.send('Login User')
})

module.exports=router;