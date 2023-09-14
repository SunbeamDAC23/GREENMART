import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import { useParams, useHistory, Link} from 'react-router-dom';
import { Dashboard } from './Dashboard';

function Sidebar() {

    const navigate = useHistory();

    
    const Logout = () => {

        navigate.push('/')
    
    }
    return (<>
    <center>
    <div className="sidenav">
      
    <img style={{width : '150px' , height : '130px'}} src='http://localhost:3000/images/logo.jpg' alt='Logo'></img>
 
    
    <hr style={{color : 'white'}}></hr>
    <Link className='nav-link' to='/admin/dashboard'>Dashboard</Link>
    <hr style={{color : 'white'}}></hr>
    <Link className='nav-link' to='/admin/products'>Products</Link>
    <hr style={{color : 'white'}}></hr>
    
    <Link className='nav-link' to='/admin/categories'>View Categories</Link>
    <hr style={{color : 'white'}}></hr>
    <Link className='nav-link' to='/admin/orders'>Orders</Link>
    <hr style={{color : 'white'}}></hr>
    <Link className='nav-link' to='/admin/profile'>Profile</Link>
    <hr style={{color : 'white'}}></hr>
    <Link className='nav-link' to='/admin/users'>View Users</Link>

    <hr style={{color : 'white'}}></hr>
    <Link className='nav-link' to='/'>Login</Link>
</div>
    </center>
<div className='topbar'>
<button style={{marginLeft : '90%' , marginTop : '20px'}} className='btn btn-danger' onClick={Logout}>Logout</button>
<hr></hr>
</div>
    
              
    </>);
}

export default Sidebar;