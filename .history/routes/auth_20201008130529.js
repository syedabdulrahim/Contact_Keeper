const express=require('express');

const router=express.Router();

//@route  POST api/AUTH
//@desc  GET Logged User
//@access PRIVATE

router.get('/',(req,resp)=>{

    resp.send('GEt logged in User')
})

module.exports=router;