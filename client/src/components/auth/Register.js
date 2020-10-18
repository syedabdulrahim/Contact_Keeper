// import { genSalt } from 'bcryptjs';
import React,{useState} from 'react'

export const Register = (props) => {


    const [user,setUser]=useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        password2:''
    })


    const {name,email,phone,password,password2}=user;

    const onChange=(event)=>{

        setUser({...user,[event.target.name]:event.target.value});
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log('Register Submit')
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" name="name" value={name} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password2" >Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange}></input>
                </div>
                <input type="Submit" value="Register" className="btn btn-primary btn-block"></input>
            </form>
            
        </div>
    )
}


export default Register;