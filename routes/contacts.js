const express=require('express');
const { body, validationResult } = require('express-validator');
const Users = require('../models/Users');
const auth=require('../middleware/auth');
const Contact=require('../models/Contact');
const router=express.Router();

//@route  GET api/contacts
//@desc   GET get all contacts of user
//@access PRIVATE

router.get('/',auth, async (req,res)=>{

    // resp.send('GEt all contacts of a user')

    try{

    const contacts=await Contact.find({user:req.user.id}).sort({date:-1});
        res.status(200).json(contacts)
    }
    catch(error){
            console.log(error);
            res.status(500).json({msg:"Server Issue"})
    }
})


//@route  POST api/contacts
//@desc   POST add  contacts of a  user
//@access PRIVATE

router.post('/',[auth,
    body('name','Name is Required').not().isEmpty()], async(req,resp)=>{

        const errors=validationResult(req);
        if(!errors.isEmpty()){
       return resp.status(400).json({error:errors.array()})
    }

    const{name,email,phone,type}=req.body;
        

    try{

        const newContact=new Contact({name,email,phone,type,user:req.user.id})

        const contact=await newContact.save();
        resp.json(contact)

    }
    catch(error){
        console.log(error);
        resp.status(500).json({msg:"Server error"})
    }

    // resp.send('Enter a new contact')
})


//@route  PUT api/contacts/:id
//@desc   PUT get all contacts of user
//@access PRIVATE

router.put('/:id',auth, async (req,res)=>{

    const {name,email,type,phone}=req.body;
    const contactFields={};
    if(name)contactFields.name=name;
    if(email)contactFields.email=email;
    if(type)contactFields.type=type;
    if(phone)contactFields.phone=phone;
    console.log("request is here")
    console.log(contactFields)

    try{
            let contact= await Contact.findById(req.params.id);
            console.log(contact)
            if(!contact){
                res.status(404).json({msg:"Not Found"})

            }

            if(contact.user.toString()!==req.user.id){
                return res.status(401).json({msg:'Not Authorized'})
            }

            contact= await Contact.findByIdAndUpdate(req.params.id,{$set:contactFields},{new:true});
            return res.json(contact);

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"Server Error"});

    }
    // resp.send('update the specified contact')
})


//@route  DELETE api/contacts/:id
//@desc   DELETE delete contact
//@access PRIVATE

router.put('/:id',(req,resp)=>{

    resp.send('delete contact')
})



module.exports=router;

