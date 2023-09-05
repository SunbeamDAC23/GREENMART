
import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from '../logo.jpg';
import $ from 'jquery';
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/js/dist/dropdown.js'
import Popper from 'popper.js';
import { hover } from "@testing-library/user-event/dist/hover";
import './Nav.css'

function Nav(){

    return (
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"lightgreen"}} >
      <div class="container-fluid"> 
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <div class="navbar-header">
    <img className="rounded-circle" src={logo} alt="Cinque Terre" style={{width:'70px',height:'70px'}}/>
    </div>
        
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link className="nav-link" to="/SearchPage" style={{color:'black'}}>Home</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/contactus" style={{color:'black'}}>Contact Us</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/Viewproduct" style={{color:'black'}}>View Products</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/addproduct" style={{color:'black'}}>Cart</Link>
            </li>
          </ul>
         
        </div>
      
        <div class="d-flex align-items-center">
     
          <a class="link-secondary me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a>
        
          <div class="dropdown show">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {sessionStorage.getItem('firstName')} {sessionStorage.getItem('lastName')}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="nav-link" to="/myprofile" >My Profile</Link>
  <Link className="nav-link" to="/ChangePassword" >Change Password</Link>
  <Link className="nav-link" to="/OrderHistory">Order History</Link>
  <Link className="nav-link" to="/addAddress" >Add address</Link>
  <Link className="nav-link" to="/" >Logout</Link>  </div>
</div>
        </div>
      </div>
     
    </nav>

    );
}
export default Nav;