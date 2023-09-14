import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import { getOrders } from '../services/Users';



export const UserOrders = () => {
  const {userId} = useParams();

  const [userorders, setuserOrders] = useState([
    {id:0, productLineItems:[{qty:0,product:{id:0,pname:''}}],orderTotal:0,odate:'',user_id:0}
  ])

  /*   "id": 9,
        "productLineItems": [
            {
                "id": 11,
                "qty": 1.0,
                "product": {
                    "id": 1,
                    "pname": "Apple",
                    "pdesc": "Apples Imported and very tasty kashmir apples",
                    "price": 175.0,
                    "category": {
                        "id": 1,
                        "cname": "fruits",
                        "imagePath": "images/fruits.jpeg"
                    },
                    "avlQty": 101.0,
                    "imagePath": "images/apples.jpeg"
                }
            },
            {
                "id": 12,
                "qty": 1.0,
                "product": {
                    "id": 2,
                    "pname": "Orange",
                    "pdesc": "Oranges Local very tasty",
                    "price": 78.0,
                    "category": {
                        "id": 1,
                        "cname": "fruits",
                        "imagePath": "images/fruits.jpeg"
                    },
                    "avlQty": 101.0,
                    "imagePath": "images/orange.jpeg"
                }
            }
        ],
        "orderTotal": 178.0,
        "status": null,
        "odate": "2023-08-22",
        "user_id": 2,
        "address": null
    }*/ 

  useEffect(()=>{getUserOrders()},[])

  const getUserOrders = async ()=>{
    const response = await getOrders(userId)
    console.log(response)
    setuserOrders(response)
    console.log(userorders[0])
  }


  return (
    <>
    <Sidebar></Sidebar>
    <div className='main'><h2>User Orders</h2>
    <table className='table table-bordered table-responsive'>
      <th>Order ID</th>
      <th>Order Date</th>
      <th>Order Total</th>
          {
            userorders.map((o,key)=>{
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
