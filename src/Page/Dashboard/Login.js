import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Login.css'
import {Navigate, useNavigate} from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name : '',
        email : '',
        password : '',
        reEnterPassword : ''
    })

    const handleChange = e => {
        const { name , value } = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const login = () =>{
    
        axios.post("https://hidden-hollows-98073.herokuapp.com/login", user)

        .then((res) =>{ 
            if(res.status == 200){
                alert('you are about to login')
                navigate('/dashboard')
            }else{
                alert('user already exist')
            }
        })
    }
    

    return (
        <div className='login'>
            <h1>Login</h1>
           <input type='text' placeholder = ' enter your Email' name = 'email' value = {user.email} onChange= {handleChange}></input>
           <input type = 'password' placeholder='enter your password' name = 'password' value = {user.password} onChange= {handleChange}></input>
            <div className='button' onClick={login} >Login</div>
            <div>or</div>
            <div className='button' >Register</div>
        </div>
    );
}



export default Login;