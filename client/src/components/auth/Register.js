// import { genSalt } from 'bcryptjs';
import React,{useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import axios from 'axios';
export const Register = (props) => {


    const alertContext=useContext(AlertContext);
    const {register,error,clearError,isAuthenticated}=useContext(AuthContext);


    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })


    const {name,email,password,password2}=user;

    const onChange=(event)=>{

        setUser({...user,[event.target.name]:event.target.value});
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(name===''||email===''||password===''){
            alertContext.setAlert("Please enter all the fields","danger")
        }
        else if(password!==password2){
            
            alertContext.setAlert("Passwords Do not match","danger")
        }
        else{
            register({
                name,
                email,
                password
                
            })
        }
        // console.log('Register Submit')
    }

    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/')
        }
        if(error=="User Already Exists"){
            alertContext.setAlert(error,"danger");
            
        }
        else{
            clearError();
        }
    },[error,isAuthenticated,props.history])

    // const testFun= async (event)=>{
        
    //     try{
    //         const testing= await axios.post('/api/users',{
    //             name:"abdul",
    //             email:"abdulhddfdim4@gmail.com",
    //             password:"789456123"
    //         })
    //         console.log(testing)

    //     }

    //     catch(error){
    //         console.log(error);
    //     }
                
    // }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}  ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password2" >Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} ></input>
                </div>
                <input type="Submit" value="Register" className="btn btn-primary btn-block"></input>
            </form>

            {/* <button className="btn btn-primary btn-block" onClick={testFun}>Demo</button> */}
            
        </div>
    )
}


export default Register;