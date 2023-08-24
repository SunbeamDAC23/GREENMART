import React, { Component } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Register() {
    const history= useHistory();

    const goToLogin = ()=>{
        history.push('/Login')
    }
    return ( <>
    
    <center>
    <img src='http://localhost:3000/images/logo.jpg'></img>
    <div style={{width : '600px'}}>
        <div className='login-form'>
                    <div className="input-container" >
                         <input type="text" className="form-control" 
                        name="first_name" 
                        placeholder="Enter first name"
                        />
                     </div>
                     <div className="input-container">
                         <input type="text" className="form-control" 
                         name="last_name" 
                        placeholder="Enter last_name"
                        />
                     </div>
                     <div className="input-container">
                        <input type="email" className="form-control" 
                         name="email" 
                         placeholder="Enter email"
                        />
                     </div>
                     <div className="input-container">
                        <input type="password" className="form-control" 
                         name="paswd" 
                         placeholder="Enter password"
                        />
                     </div>
                     <div className="form-group">
                        <input type="number" className="form-control" 
                         name="mobile" 
                         placeholder="Enter mobile"
                        />
                     </div>
                     <button className="btn btn-primary" onClick={goToLogin}
                              >
                         Register
                     </button>
                     </div>
                     </div>

    </center>
    </> );
}

export default Register;