import React,{useContext,useEffect} from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactsForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
// import authContext from '../../context/auth/authContext';

  const  Home=()=> {

    const authcontext=useContext(AuthContext);

    useEffect(()=>{

        authcontext.loadUser();
    },[])
    return (
        <div className="grid-2">
            <div>
            <ContactForm></ContactForm>
            </div>
            <div>
                <ContactFilter></ContactFilter>
                <Contacts></Contacts>
            </div>
        </div>
    )
}

export default Home;