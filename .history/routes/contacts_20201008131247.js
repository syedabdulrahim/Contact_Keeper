const express=require('express');

const router=express.Router();

//@route  GET api/contacts
//@desc   GET get all contacts of user
//@access PRIVATE

router.get('/',(req,resp)=>{

    resp.send('GEt all contacts of a user')
})


//@route  POST api/contacts
//@desc   POST get all contacts of user
//@access PRIVATE

router.post('/',(req,resp)=>{

    resp.send('Enter a new contact')
})


//@route  PUT api/contacts/:id
//@desc   PUT get all contacts of user
//@access PRIVATE

router.put('/:id',(req,resp)=>{

    resp.send('update the specified contact')
})


//@route  DELETE api/contacts/:id
//@desc   DELETE delete contact
//@access PRIVATE

router.put('/:id',(req,resp)=>{

    resp.send('delete contact')
})




