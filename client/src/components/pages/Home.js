import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactsForm';

  const  Home=()=> {
    return (
        <div className="grid-2">
            <div>
            <ContactForm></ContactForm>
            </div>
            <div>
                <Contacts></Contacts>
            </div>
        </div>
    )
}

export default Home;