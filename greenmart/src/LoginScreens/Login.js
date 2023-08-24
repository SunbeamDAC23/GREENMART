import React, { Component } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {

    const history = useHistory();
    const GoToAdminDashboard = ()=>{
        history.push('/');
    }
    const GoToRegister = ()=>{
        history.push('/Register')
    }

    return (<>
    <center>
        <img src='http://localhost:3000/images/logo.jpg'></img>
    <table className='table table-bordered table-responsive' style={{width : '500px'}}>
        <tbody>
            <tr>
                <td>Email</td>
                <td>
                    <input type='text' placeholder='Enter Email'></input>
                </td>
                
            </tr>
            <tr>
            <td>Password</td>
                <td>
                    <input type='text' placeholder='Enter Password'></input>
                </td>
            </tr>
            <tr>
                <td colSpan='2' style={{alignItems :'center'}}>
                    <button className='btn btn-block btn-info' onClick={GoToAdminDashboard}>Login</button>
                </td>
            </tr>
            <tr>
                <td colSpan='2' style={{color:'blueviolet'}}>Don't Have Account???
                    <button className='btn btn-block btn-danger' onClick={GoToRegister}>Register</button>
                </td>
            </tr>
        </tbody>
    </table>
   
    </center>
    </>);
}

export default Login;