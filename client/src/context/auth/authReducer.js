import {REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    CLEAR_ERRORS} from '../types';    


    export default (state,action)=>{


        switch(action.type) {

            case LOGIN_SUCCESS:
            case REGISTER_SUCCESS:{

                localStorage.setItem('token',action.payload.token);
                // console.log(REGISTER_SUCCESS);

                return {
                    ...state,
                    isAuthenticated:true,
                    loading:false,
                    token:action.payload.token,
                    error:null
                }
            }
            case LOGIN_FAIL: 
            case REGISTER_FAIL:
             case AUTH_ERROR:{
                localStorage.removeItem('token');
                console.log(REGISTER_FAIL)
                console.log(AUTH_ERROR)
                return{

                    ...state,
                    isAuthenticated:false,
                    loading:false,
                    error:action.payload,
                    user:null,
                    token:null
                }
            }

            case CLEAR_ERRORS:{
                console.log(CLEAR_ERRORS)
                return{
                    ...state,
                    error:null
                }
            }
            case USER_LOADED:{
                // console.log(USER_LOADED);
                return{
                    ...state,
                    user:action.payload,
                    isAuthenticated:true,
                    loading:false,
                    user:action.payload
                }
            }

            default :return state
        } 
      }