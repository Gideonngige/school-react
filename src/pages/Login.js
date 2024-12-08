import React, { useState, useEffect } from 'react';
import "../styles/Home.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = () => {
        console.log(email);
        console.log(password);

    };
    return (
        <div className='container home-one container1'>
            <div className='inner-container'>
                <h2>Login</h2><hr/>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='e.g johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='your password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                    <input type='submit' className='btn btn-primary' value="Login"/>
                </form>
            </div>

        </div>
    );
};

export default Login;