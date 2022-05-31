import React from 'react';

import './styles.css'

function Login() {
    return (
        <div className="container">
            <div className="box-login">
                <form id='login-form' className='form'>
                    <label className='form-item' for="GET-username">Username</label>
                    <input className='form-item input' id="GET-username" type="text" username="username" />
                    <label className='form-item' id="LABEL-password" for="GET-password">Password</label>
                    <input className='form-item input' id="GET-password" type="password" password="password" />
                    <div className='bottom-login'>
                        <input className='form-item' id="Submit" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;