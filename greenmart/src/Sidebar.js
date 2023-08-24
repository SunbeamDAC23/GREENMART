import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './app.css'

import { useParams, useHistory } from 'react-router-dom';

function Sidebar() {

    const history = useHistory();

    
    const Logout = () => {

        history.push('/Login')
    
    }
    return (<>
    <center>
    <div class="sidenav">
      
      <img style={{width : '150px' , height : '130px'}} src='http://localhost:3000/images/logo.jpg' alt='Logo'></img>
 
    
      <hr style={{color : 'white'}}></hr>
   <a href="/">Dashboard</a>
   <hr style={{color : 'white'}}></hr>
 <a href="/Product">Products</a>
 <hr style={{color : 'white'}}></hr>
 <a href="/Category">Categories</a>
 <hr style={{color : 'white'}}></hr>
 <a href="/ViewUsers">All Users</a>
 <hr style={{color : 'white'}}></hr>
 <a href="/ChangePassword">Change Password</a>
 <hr style={{color : 'white'}}></hr>
 <a href="/Orders">Orders</a>
 <hr style={{color : 'white'}}></hr>

 <a href="/Login">Logout</a>
</div>
    </center>
<div className='topbar'>
<button style={{marginLeft : '90%' , marginTop : '20px'}} className='btn btn-danger' onClick={Logout}>Logout</button>
<hr></hr>
</div>
    
              
    </>);
}

export default Sidebar;