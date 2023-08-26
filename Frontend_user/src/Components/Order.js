import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import "./central.css";

import Nav from "./Nav";
function Order() {
   const[orders ,setorder] =useState([
    {OrderId:1,OrderDate:"01-02-2023",Status:"confirm",details:"Something"}
,{OrderId:2,OrderDate:"01-02-2023",Status:"confirm",details:"Something"},
{OrderId:5,OrderDate:"01-02-2023",Status:"confirm",details:"Something"},
{OrderId:3,OrderDate:"01-02-2023",Status:"confirm",details:"Something"},
{OrderId:4,OrderDate:"01-02-2023",Status:"confirm",details:"Something"}])
    // const[order ,setorder] =useState[{OrderId:,OrdrDate:,Status:,details:[]}]
    return ( <>
    <body >
        <div className="bg-img">
    <Nav></Nav>
    <h1 style={{textAlign:'center'}}> Order History</h1>
    <div className="mydiv">

        
        <h1>Customer Order history</h1>
        </div>
        <div className="container" style={{height:'100%',}} >
            <div  className=" table table-responsive" >
          <table className=" table table-bordered" style={{backgroundColor:'#bdc3c7'}}>
            <tr>
                <td>
                    OrderID
                </td>
                <td>OrderDate</td>
                <td>Status</td>
                <td>Details</td>
            </tr>
            
            
            <tbody>
            {
                orders.map((order)=>{
                    return <tr key={order.OrderId}>
                        <td>
                            
                            {order.OrderId}
                        
                            
                        </td>
                        <td> {order.OrderDate}</td>
                    
                        
                         
                    
                    <td>
                        {order.Status}
                        
                    </td>
                    <td>
                         <button className=" btn btn-danger">{order.details}</button>
                    </td>
                    </tr>
                })
            }
        </tbody>
            </table>
            </div>

        </div>
        </div>
        </body>
    
    
    </> );
}

export default Order;