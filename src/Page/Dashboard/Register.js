import React, {useState} from 'react';
import './Register.css'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'


const Register = () => {
    const [user, setUser] = useState({
        name : '',
        email : '',
        password : '',
        reEnterPassword : ''
    })

    const navigate = useNavigate()

    const handleChange = e => {
        const { name , value } = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () =>{
        const { name, email, password, reEnterPassword} = user;
        console.log(name, email, password)
        if(name && email && password && (password === reEnterPassword)){
            
            axios.post("https://hidden-hollows-98073.herokuapp.com/register", user)
            .then((res) => {
                if(res.status == 200){
                    
                    alert('user registered successfully')
                    navigate('/login')
                }else{
                    alert('user already exist')
                }
            })
        }else{
            alert('invalid input')
        }
    } 

    return <div className='register'>
        {console.log('user' , user)}
        <h1>Register</h1>
        <input type='text' name = 'name' value = {user.name} placeholder='your name' onChange={ handleChange }></input>
        <input type='email' name = 'email' value = {user.email} placeholder='your email' onChange={ handleChange }></input>
        <input type='password' name = 'password' value = {user.password} placeholder='your password' onChange={ handleChange }></input>
        <input type='password' name = 'reEnterPassword' value = {user.reEnterPassword} placeholder='re-enter password' onChange={ handleChange }></input>
        <div className='button' onClick={register}>Register as an admin</div>
        <div>or</div>
        <div className='button' >Already an admin</div>
    </div>;
}



export default Register;