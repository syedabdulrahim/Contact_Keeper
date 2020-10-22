import React,{useContext} from 'react'
import AuthContext from '../../context/auth/authContext';
import {Route,Redirect} from 'react-router-dom'
export const PrivateRoute = ({component:Component,...rest}) => {


    const authContext=useContext(AuthContext);
    const{isAuthenticated,loading}=authContext;



    return (
        <Route {...rest} render={props=>!isAuthenticated&&!loading?
        (<Redirect to="/login"></Redirect>):(
            <Component {...props}/>
        )}/>
    )
}

export default PrivateRoute;