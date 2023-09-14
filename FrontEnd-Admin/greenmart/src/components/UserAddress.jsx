import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getaddress } from '../services/Users';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const UserAddress = () => {
const {userId} = useParams();

const[address, setAddress]=useState([])

useEffect(()=>{getAddresses()},[])

const getAddresses = async () => {
  const response =await getaddress(userId)
  console.log(response)  
  setAddress(response)
}

  return (
    <>
      <Sidebar></Sidebar>
        <div className='main'>
        <h3>Address : </h3>
        <h1>Userid={userId}</h1>
        <center>
        <table className='table table-bordered table-responsive'>
       {
          address.map((addr, key)=>{
            return<tr>
         <td>{key=addr.id}</td>
              <td><h4>{addr.line1 + ' '+ addr.line2+' '+addr.city+ ' '+addr.state + ' '+addr.pincode}</h4></td>
             </tr>
          })
        }
       </table>
        </center>
        </div>
    </>
  )
}
