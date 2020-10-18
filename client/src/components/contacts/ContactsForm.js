import React,{useState,useContext,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactsForm = (props) => {

    const contactContext=useContext(ContactContext);
    const {current,clearCurrent}=contactContext;


    useEffect(()=>{

        console.log("useEffect Ran")
        if(current!==null){
            setContact(current);
        }
        else{

            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            })
        }
    },[current,contactContext])

    const [contactState,setContact] =useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })

    const {name,email,phone,type}=contactState;
    const onChange=(event)=>{

        setContact({...contactState,[event.target.name]:event.target.value})

    }

    const onSubmit=(event)=>{
        event.preventDefault();

        if(current===null)
        {
            contactContext.addContact(contactState);
        }
        else{
            contactContext.updateContact(contactState);
            // clearCurrent();

        }
        
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'

        })
    }

    const clearAll=()=>{
        clearCurrent();
    }
    

    return (

       <form onSubmit={onSubmit}>
           <h2 className="text-primary">{current?'Edit Contact' :'Add Contact'}</h2>
           <input type="text"  placeholder="Name" name="name" value={name} onChange={onChange}></input>
           <input type="email"  placeholder="Email" name="email" value={email} onChange={onChange}></input>
           <input type="text"  placeholder="Phone" name="phone" value={phone} onChange={onChange}></input>

           <h5>Contact Type</h5>
           <input type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange}/> {' '}Professional
           <input type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange}/> {' '}Personal
           <div>
               <input type="submit" value={current?'Update Contact' :'Add Contact'} className="btn btn-primary btn-block"/>
           </div>
           {current&&<div>
               <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
               </div>}
       </form>
    )
}

export default ContactsForm
