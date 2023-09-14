import React, { useState } from "react";
import Nav from './Nav'
import { useNavigate } from "react-router-dom";
import constants from "../Utils/constants";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'

function ProductDesc() {
      const navigate =useNavigate()
    const backtopage=()=>{
        sessionStorage.removeItem('pimage')
        sessionStorage.removeItem('pname')
        sessionStorage.removeItem('pprice')
        sessionStorage.removeItem('pavlqty')
        sessionStorage.removeItem('pdesc')
        navigate('/Viewproduct')
    }

    const addProduct=()=>{
    toast.error('Product added succesfully')
    }
       
    return (
        <div>
            <Nav></Nav>
            <ToastContainer/>
            <div class="container mt-5 mb-5" style={{border:'solid',borderBlockColor:'green',borderRadius:10}}>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4"> <img id="main-image" src={constants.serverUrl+'products/images/'+sessionStorage.getItem['proId']} class="card-img-top" alt="Laptop" width="250" /> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="product p-4">
                                            <div class="d-flex justify-content-between align-items-center">
                                            </div>
                                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Leafy</span>
                                                <h5 class="text-uppercase">{sessionStorage.getItem('pname')}</h5>
                                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">Price : {sessionStorage.getItem('pprice')}</span>
                                                    <div class="ml-2">Available Quantity : {sessionStorage.getItem('pavlqty')}</div>
                                                </div>
                                            </div>
                                            <p class="about">{sessionStorage.getItem('pdesc')}</p>
                                            <div class="d-flex align-items-center"><a className="btn btn-warning" onClick={backtopage}>Back</a></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
 export default ProductDesc;

