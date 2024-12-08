import React, { useState, useEffect } from 'react';
import "../styles/Home.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async() => {
        console.log(email);
        console.log(password);
        try{
            // Simulate login API call
            const response = await fetch('http://127.0.0.1:8000/handle_login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if(response.ok){
                const result = await response.json();
                console.log('Logged in successfully:', result);
            }
            else{
                console.error('Failed to login:', response.statusText);
                alert('Failed to login'); // Display an error message
            }
        }
        catch(error){
            console.error('Error:', error);
            alert('Failed to login'); // Display an error message
        }

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