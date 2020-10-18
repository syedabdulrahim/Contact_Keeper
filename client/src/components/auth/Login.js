// import { genSalt } from 'bcryptjs';
import React,{useState} from 'react'

export const Login = (props) => {


    const [user,setUser]=useState({
       
        email:'',
        password:''
    })


    const {email,password}=user;

    const onChange=(event)=>{

        setUser({...user,[event.target.name]:event.target.value});
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log('Login  Submit')
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
              
                <div className="form-group">
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}></input>
                </div>
               
                <input type="Submit" value="Login" className="btn btn-primary btn-block"></input>
            </form>
            
        </div>
    )
}


export default Login;