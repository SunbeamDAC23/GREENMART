import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { getAllOrders } from '../services/Orders'

export const Orders = () => {
  const [orders, setOrders] = useState([
    {id:0, productLineItems:[{qty:0,product:{id:0,pname:''}}],orderTotal:0,odate:'',user_id:0}
  ])

  const getOrders=async ()=>{
    const response = await getAllOrders()
    setOrders(response) 
  }

  useEffect(()=>{getOrders()},[])

  return (
    <>
   <Sidebar></Sidebar>
    <div className='main'><h2>Orders</h2>
    <table className='table table-bordered table-responsive'>
      <th>Order ID</th>
      <th>Order Date</th>
      <th>Order Total</th>
          {
            orders.map((o,key)=>{
              return <tr>
              <td>{key=o.id}</td>
              <td>{o.odate}</td>
              <td>₹{o.orderTotal}</td>
              <td>{o.productLineItems.map((p)=>{
                return <tr><td>{p.qty}</td><td>x</td><td>{p.product.pname}</td></tr>
              })}</td>
              </tr>
            })
          }
      
    </table>
    
    
    </div>
    </>
  )
}
