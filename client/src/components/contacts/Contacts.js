import React,{useContext,Fragment} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';




const Contacts=(props)=>{

const contactContext=useContext(ContactContext);

return(

    <Fragment>
        {contactContext.contacts.map((contact)=>{
            return<ContactItem contact={contact} key={contact.id}></ContactItem>
        })}
    </Fragment>
)



}

export default Contacts;