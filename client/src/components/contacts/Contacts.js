import React,{useContext,Fragment} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';
// import ContactFilter from './ContactFilter';




const Contacts=(props)=>{

const contactContext=useContext(ContactContext);
const{filtered}=contactContext;

return(

    <Fragment>
        {filtered!=null?
        filtered.map(contact=>{return <div><ContactItem contact={contact} key={contact.id}></ContactItem> </div>})
        :contactContext.contacts.map((contact)=>{return<div><ContactItem contact={contact} key={contact.id}></ContactItem></div>
        })}
        
    </Fragment>
)



}

export default Contacts;