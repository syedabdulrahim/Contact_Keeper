import React,{useReducer} from 'react';
import ContactContext from './contactContext'
import contactReducer from './contactReducer';
import  {v4 as uuid} from 'uuid';
import {ADD_CONTACT,
        DELETE_CONTACT,
        SET_CURRENT,
        CLEAR_CURRENT,
        UPDATE_CONTACT,
        FILTER_CONTACTS,
        CLEAR_FILTER} from '../types';

const ContactState=(props)=>{

    const initialState={
        contacts:[
            {
                id:1,
                name:"Syed",
                phone:789456123,
                email:"syed123@gmail.com",
                type:"personal"
            },
            {
                id:2,
                name:"Abdul",
                phone:123456789,
                email:"abdul123@gmail.com",
                type:"personal"
            },
            {
                id:3,
                name:"rahim",
                phone:456789123,
                email:"rahim123@gmail.com",
                type:"professional"
            }
        ]
    }

    const [state,dispatch]=useReducer(contactReducer,initialState);


    //ADD Contact

    const addContact=(contact)=>{

        contact.id=uuid();

        dispatch({type:ADD_CONTACT,payload:contact})

    }

    //Deleting a Contact

    const deleteContact =(id)=>{
        dispatch({type:DELETE_CONTACT,payload:id})
    }

    return (
        <ContactContext.Provider value={{
            contacts:state.contacts,
            addContact:addContact,
            deleteContact:deleteContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;