import React, { Component, useEffect, useState } from 'react'
 import '../app.css'
import toast from 'react-toastify'
import Sidebar from './Sidebar'
import { getSummary } from '../services/Summary'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Dashboard = () => {

    const [summary,setSummary] = useState([])

    useEffect(()=>{
        loadSummary()
    },[])

    const loadSummary = async ()=>{
       const response= await getSummary()
       if(response['status']===200)
       {
        console.log(response['data'])
        setSummary(response['data'])
       }
       else
       {
         console.log("Something Went Wrong...!!!")
       }
    }


  return (<>
    <div>
                <Sidebar />
            </div>
            <div className='main'>
                <table className='table table-bordered table-responsive' >
                    <tr>
                        <center>
                        <td><div className="text-center">
                            <div className="container">
                                <div className="">
                                    <h4 className="text-danger">Total Customer</h4>
                                    <h2 className="text-primary">{summary['customers']}</h2>
                                </div>
                                <div className="card-footer">
                                  <Link className="btn btn-info" to="/admin/users">View Details..</Link>
                                </div>
                            </div>
                        </div>
                        </td>
                        <td><div className="text-center">
                            <div className="container">
                                <div className="">
                                    <h4 className="text-danger">Total Orders</h4>
                                    <h2 className="text-primary">{summary.orders}</h2>
                                </div>
                                <div className="card-footer">
                                <Link className="btn btn-info" to="/admin/orders">View Details..</Link>
                                </div>
                            </div>
                        </div>
                        </td>
                        <td><div className=" text-center">
                            <div className="container">
                                <div className="">
                                    <h4 className="text-danger">Total Products</h4>
                                    <h2 className="text-primary">{summary.products}</h2>
                                </div>
                                <div className="card-footer">
                                <Link className="btn btn-info" to="/admin/products">View Details..</Link>
                                </div>
                            </div>
                            
                        </div>
                        </td>
                        </center>
                    </tr>
                </table>
                <img src='http://localhost:3000/images/vegOg.jpeg' style={{width:'100%',height :'500px'}}></img>
            </div>
   </>
  )
}
