import React,{useContext,useRef} from 'react';
import ContactContext from '../../context/contact/contactContext';


const ContactFilter=(props)=>{

    const contactContext=useContext(ContactContext);
    // const text=useRef(); //since only we do not have to access to the content
const onChange=(event)=>{

    if(event.target.value!==''){
        contactContext.filterContacts(event.target.value)
    }
    else{
        contactContext.clearFilter();
    }


}
    return (

        <form>
            <input type="text" placeholder="Search Contact" onChange={onChange}></input>
        </form>

    )



}
export default ContactFilter;