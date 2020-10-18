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

            case SET_CURRENT:{

                return{
                    ...state,
                    current:action.payload
                }
            }

            case CLEAR_CURRENT:{
                return{
                    ...state,
                    current:null
                }
            }

            case UPDATE_CONTACT:{
                return{
                    ...state,
                    current:null,
                    contacts:state.contacts.map((contact)=>{
                        if(contact.id==action.payload.id){
                            return action.payload;
                        }
                        else{
                            return contact
                        }
                    })
                }
            }

            case FILTER_CONTACTS:{
                return{
                    ...state,
                    filtered:state.contacts.filter(contact=>{

                        const regex=new RegExp(action.payload,'gi');
                        return contact.name.match(regex) || contact.email.match(regex);
                    })
                }
            }

            case CLEAR_FILTER:{
                return{
                    ...state,
                    filtered:null
                }
            }


            default :return state;
        }


}

export default reducer;