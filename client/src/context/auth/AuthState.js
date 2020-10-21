import React,{useReducer} from 'react';
import authContext from './authContext';
import axios from 'axios';
import setAuthToken from '../../utility/setAuthToken';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
   } from '../types';

const AuthState=(props)=>{

    const initialState={
       token:localStorage.getItem('token'),
       isAuthenticated:null,
       loading:true,
       error:null,
       user:null
    }

    const [state,dispatch]=useReducer(authReducer,initialState);


    //Load User
    const loadUser=async()=>{

        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
        try{

            const res=await axios.get('/api/auth');

            dispatch({type:USER_LOADED,payload:res.data});
        }
        catch(error){

            dispatch({type:AUTH_ERROR})

        }
        }
    //Register User
    const register=async(formData)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }


        try{
            // console.log("hereee")
            const res=await axios.post('/api/users',formData,config);
            dispatch({type:REGISTER_SUCCESS,
                payload:res.data})

                loadUser();
        }
        catch(error){
                dispatch({type:REGISTER_FAIL,
                payload:error.response.data.msg})
        }
    }
    //login user
    const login=async(formData)=>{

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{

            const res=await axios.post('/api/auth',formData,config);
            dispatch({type:LOGIN_SUCCESS,payload:res.data});
            loadUser();

        }

        catch(error){

            dispatch({type:LOGIN_FAIL,payload:error.response.data.msg});
        


        }
    }

    //logout user
    //clear errors
    const clearError=()=>{
        dispatch({type:CLEAR_ERRORS});
    }
    return (
        <authContext.Provider value={{

            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            register:register,
            clearError,
            loadUser,
            login


        }}>
            {props.children}
        </authContext.Provider>
       
    )

}

export default AuthState;