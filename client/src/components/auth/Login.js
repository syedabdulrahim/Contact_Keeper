// import { genSalt } from 'bcryptjs';
import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
export const Login = (props) => {

    const authContext=useContext(AuthContext);  
    const alertContext=useContext(AlertContext);
    const {login,error,clearError,isAuthenticated}=useContext(AuthContext);
    const {setAlert}=alertContext;

    const [user,setUser]=useState({
       
        email:'',
        password:''
    })
    console.log("Render Login component")
    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/')
        }
        if(error=="Invalid Credentials"){
            alertContext.setAlert(error,"danger");
            
        }
        else{
            clearError();
        }
    },[error,isAuthenticated,props.history])

    const {email,password}=user;

    const onChange=(event)=>{

        setUser({...user,[event.target.name]:event.target.value});
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        // console.log('Login  Submit')
        if(email==''||password==''){
            setAlert("Please fill all the fields","danger")
        }
        else{
            login({email,password});
        }
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
              
                <div className="form-group">
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required></input>
                </div>
               
                <input type="Submit" value="Login" className="btn btn-primary btn-block"></input>
            </form>
            
        </div>
    )
}


export default Login;