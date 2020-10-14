import {ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER} from '../types';



const reducer=(state,action)=>{

        switch(action.type){

            case ADD_CONTACT:{
                return{
                    ...state,
                    contacts:[...state.contacts,action.payload]
                }
            }

            case DELETE_CONTACT:{
              
                const oldContacts=[...state.contacts];
                const newContacts=oldContacts.filter((contact)=>{
                    return contact.id!=action.payload
                })

                return{
                    ...state,
                    contacts:newContacts
                }
            }

            default :return state;
        }


}

export default reducer;