const express=require('express');

const router=express.Router();

//@route  POST api/users
//@desc   Register a user
//@access PUBLIC

router.post('/',(req,resp)=>{

    resp.send('Registers a user')
})

module.exports=router;