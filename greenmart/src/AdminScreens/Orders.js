import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function Orders() {
    const [orders, setorder] = useState([
        { OrderId: 1, OrderDate: "01-02-2023", Status: "Pending", details: "Something" }
        , { OrderId: 2, OrderDate: "01-02-2023", Status: "Delievered", details: "Something" },
        { OrderId: 5, OrderDate: "01-02-2023", Status: "Pending", details: "Something" },
        { OrderId: 3, OrderDate: "01-02-2023", Status: "Pending", details: "Something" },
        { OrderId: 4, OrderDate: "01-02-2023", Status: "Delievered", details: "Something" }])
    return (<>
        <Sidebar>

        </Sidebar>
        <div className='main'>
            <h1>List of Orders</h1>
            <hr></hr>
            <table className='table table-bordered table-responsive'>
                <tbody>
                    <th>OrderID</th>
                    <th>OrderDate</th>
                    <th>Details</th>
                    <th>Status</th>
                    {
                        orders.map((order) => {
                            if(order.Status == "Pending")
                            {
                                return <tr key={order.OrderId}>
                                <td>
                                    {order.OrderId}
                                </td>
                                <td> {order.OrderDate}</td>
                                <td>
                                    <button className=" btn btn-success">{order.details}</button>
                                </td>
                                <td style={{backgroundColor:'red'}}>
                                   <h4> {order.Status}</h4>
                                </td>  
                            </tr>
                            }
                            else
                            {
                                return <tr key={order.OrderId}>
                                <td>
                                    {order.OrderId}
                                </td>
                                <td> {order.OrderDate}</td>
                                <td>
                                    <button className=" btn btn-success">{order.details}</button>
                                </td>
                                <td style={{backgroundColor:'green'}}>
                                   <h4> {order.Status}</h4>
                                </td>
                               
                            
                                
                              
                            </tr>
                            }

                        })
                    }
                </tbody>

            </table>
        </div>

    </>);
}

export default Orders;