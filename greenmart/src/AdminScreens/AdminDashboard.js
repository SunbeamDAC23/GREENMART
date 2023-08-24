import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import '../app.css';




function AdminDashBoard() {
    return (
        <>

            <div>
                <Sidebar />
            </div>
            <div className='main'>
                <table className='table table-bordered table-responsive'>
                    <tr>
                        <center>
                        <td><div class="text-center">
                            <div class="container">
                                <div class="">
                                    <h4 class="text-danger">Total Customer</h4>
                                    <h2 class="text-primary">56</h2>
                                </div>
                                <div class="card-footer">
                                    <a href="/ViewUsers" className='btn btn-info'>View Details...</a>
                                </div>
                            </div>
                        </div>
                        </td>
                        <td><div class="text-center">
                            <div class="container">
                                <div class="">
                                    <h4 class="text-danger">Total Orders</h4>
                                    <h2 class="text-primary">26</h2>
                                </div>
                                <div class="card-footer">
                                    <a href="/Orders" className='btn btn-info'>View Details</a>
                                </div>
                            </div>
                        </div>
                        </td>
                        <td><div class=" text-center">
                            <div class="container">
                                <div class="">
                                    <h4 class="text-danger">Total Products</h4>
                                    <h2 class="text-primary">26</h2>
                                </div>
                                <div class="card-footer">
                                    <a href="/Product" className='btn btn-info'>View Details...</a>
                                </div>
                            </div>
                        </div>
                        </td>
                        </center>
                    </tr>


                </table>



            </div>
        </>
    );
}

export default AdminDashBoard;