import React,{useContext,Fragment,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';
import Spinner from '../layout/Spinner'
// import ContactFilter from './ContactFilter';




const Contacts=(props)=>{

const contactContext=useContext(ContactContext);
const{contacts,filtered,getContacts,loading}=contactContext;

useEffect(()=>{
        getContacts();
        //es-lint    
},[])

if(contacts!=null &&!loading&&contacts.length===0){
    return <h4>Please enter a contact</h4>
}

return(

    // if(contacts!==null&&!loading?():<Spinner/>)

    <Fragment>
        {contacts!==null&&!loading?(
            filtered!=null?
                filtered.map(contact=>{return <div><ContactItem contact={contact} key={contact._id}></ContactItem> </div>})
                :contactContext.contacts.map((contact)=>{return<div key={contact._id}><ContactItem contact={contact} ></ContactItem></div>
                })
        ):<Spinner/>}
        
        
    </Fragment>
)



}

export default Contacts;