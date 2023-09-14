import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getAllUsers, getOrders, getaddress } from '../services/Users';
import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { UserAddress } from './UserAddress';

import { UserOrders } from './UserOrders';



export const Users = () => {

    const[users, setUsers]=useState([])

    const[address, setAddress]=useState([])

    const[orders, setOrders] =useState([])

    const history=useHistory();

    useEffect(()=>{
        loadUsers()
    },[])

   
    
    const loadUsers = async ()=>{
        const response = await getAllUsers()
        setUsers(response)
    }

    const showAddress = (userId)=>{
        history.push(`/admin/users/userAddress/${userId}`)

      

    }

    const showOrders = async(userId)=>{
        history.push(`/admin/users/userOrders/${userId}`)
     

      }
  





  return (
    <>
    <Sidebar></Sidebar>
    <div className='main container container-fluid'>
    <table className='table table-bordered table-responsive container'>
            <tbody>
               <tr>
               <th>User ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Action</th>
               </tr>
               {
                users.map((user, key) => {
                    return <tr key={user.id}>
                        <td><h4>{user.id}</h4></td>
                        <td>{user.firstName}</td>        
                        <td>{user.lastName}</td>
                        <td>{user.mobile}</td>
                        <td>{user.email}</td>
                        <td><button onClick={()=>{showAddress(user.id)}} 
                        className='btn btn-sm btn-danger'>Show Addresses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>{showOrders(user.id)}} 
                        className='btn btn-sm btn-success'>Show Orders</button></td>
                    </tr>
                })
               }
            </tbody>
        </table>
        <hr></hr>

        {
            address.map((add,key)=>{
                return <div>
                <h3>Address : </h3>
                <h5>{add.line1 + ' '+add.line2 +' '+ add.city+
                ' '+add.state+' '+add.pincode}</h5>
                </div>
            })
        }

             


        </div>

    </>  )
}
