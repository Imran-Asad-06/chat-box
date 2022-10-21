import React from 'react';

const Login = () => {
    return (
        <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat Box</span>
            <span className='title'>Register</span>
            <form >
                
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder='Enter Your Password' />
                
                <button>Register</button>
            </form>
            <p>Don't have an Account? Register</p>
        </div>
    </div>
    );
};

export default Login;