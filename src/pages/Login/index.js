import React from 'react';

function Login() {
    return(
        <div className="container">
            <div className="box-login">
                <form>
                    <label for="GET-username">Username</label>
                    <input id="GET-username" type="text" username="username" />
                    <label for="GET-password">Password</label>
                    <input id="GET-password" type="password" password="password" />
                    <input type="submit" value="Save"/>
                </form>
            </div>
        </div>
    )
}

export default Login;