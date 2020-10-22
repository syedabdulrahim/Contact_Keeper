import React,{useReducer} from 'react';
import ContactContext from './contactContext'
import contactReducer from './contactReducer';
import  {v4 as uuid} from 'uuid';
import axios from 'axios';
import {ADD_CONTACT,
        DELETE_CONTACT,
        SET_CURRENT,
        CLEAR_CURRENT,
        UPDATE_CONTACT,
        FILTER_CONTACTS,
        CLEAR_FILTER,
    CONTACT_ERROR,
    GET_CONTACTS,
    CLEAR_CONTACTS} from '../types';

const ContactState=(props)=>{

    const initialState={
        contacts:null,
        current:null,
        filtered:null,
        error:null  
    }

    const [state,dispatch]=useReducer(contactReducer,initialState);

    //GET Contacts

    const getContacts=async()=>{

        try{
            const res=await axios.get('/api/contacts');

            dispatch({type:GET_CONTACTS,payload:res.data})

        }
        catch(error){

            dispatch({type:CONTACT_ERROR,payload:error.response})
        }

    }

    //
   // clear contacts

   const clearContacts=()=>{
       dispatch({type:CLEAR_CONTACTS})
   }

    //ADD Contact

    const addContact=async(contact)=>{

        // contact.id=uuid();

        const config={
            headers:{
                'Content-Type':"application/json"
            }
        }   

        try{
                const res=await axios.post('/api/contacts',contact,config);
                    dispatch({type:ADD_CONTACT,payload:res.data})

        }

        catch(error){

            dispatch({type:CONTACT_ERROR,payload:error.response})

        }

        // dispatch({type:ADD_CONTACT,payload:contact})


    }

    //Deleting a Contact

    const deleteContact =async (id)=>{


        try{

            const res=await axios.delete(`/api/contacts/${id}`)

            dispatch({type:DELETE_CONTACT,payload:id})
        }

        catch(error){

            dispatch({type:CONTACT_ERROR,payload:error.response})

        }

      
    }


    // Set Current Contact

    const setCurrent=(contact)=>{

        dispatch({type:SET_CURRENT,payload:contact})

    }

    //CLEAR Current Contact

        const clearCurrent=()=>{

        dispatch({type:CLEAR_CURRENT})

    }

    //update Contact 
        const updateContact=async(contact)=>{

        //    console.log(contact)

        const config={
            headers:{
                'Content-Type':"application/json"
            }
        }
        try{
            const res=await axios.put(`/api/contacts/${contact._id}`,contact,config);
            dispatch({type:UPDATE_CONTACT,payload:res.data})
        }
        catch(error){

        }
           
        }

    //Filter Contacts

    const filterContacts=text=>{

        dispatch({type:FILTER_CONTACTS,payload:text})
    }

    const clearFilter=()=>{
        dispatch({type:CLEAR_FILTER});
    }


    return (
        <ContactContext.Provider value={{
            contacts:state.contacts,
            current:state.current,
            error:state.error,
            filtered:state.filtered,
            addContact:addContact,
            deleteContact:deleteContact,
            setCurrent:setCurrent,
            clearCurrent:clearCurrent,
            updateContact,
            clearFilter,
            filterContacts,
            getContacts
            

        }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;