import React,{useContext,useEffect,Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
const Navbar=(props)=>{


    const authContext=useContext(AuthContext);
    const {isAuthenticated,logout,user}=authContext;
    const {clearContacts}=useContext(ContactContext);

    const onLogout=()=>{
        logout();
        clearContacts();
    }




    const authLinks=(
    <Fragment>
        
        <li>Hello {user&&user.user.name}</li>
        <li>
            <a onClick={onLogout} href="/login"><i className="fas fa-sign-out-alt"/><span className="hide-sm">Logout</span></a>
        </li>
        
    </Fragment>
    )



    const guestLinks=(
        <Fragment>
            
            <li>
                <Link to ="/login">Login</Link>
            </li>
            <li>
                <Link to ="/register">Register</Link>
            </li>
            
        </Fragment>
        )

return(

    <div className="navbar bg-primary">
        <h1>
            < i className={props.icon}/>
            {props.title}
        </h1>
        <ul>
         {isAuthenticated?authLinks:guestLinks}
           

        </ul>
    </div>
)


}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string,
}

Navbar.defaultProps={
    title:"Contact Keeper",
    icon:"fas fa-address-book"
}

export default Navbar;