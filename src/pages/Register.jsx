import React from 'react';
import Add from '../images/icons8-add-image-48.png'



const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat Box</span>
                <span className='title'>Register</span>
                <form >
                    <input type="text" placeholder='Enter Your Name' />
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="password" placeholder='Enter Your Password' />
                    <input style={{display:'none'}} type="file" id='file' placeholder='Upload Your Image' />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an image</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an Account? Login</p>
            </div>
        </div>
    );
};

export default Register;