import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Nav"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import background from '../vegetables.jpg'
import { useEffect, useState } from "react";
import { getAllorders } from "../Services/order";
import { getHistory } from "../Services/order";

function AddProduct() {
const navigate = useNavigate()
const [orders,setorders]=useState([])
useEffect(() => {
        showOrders()
    }, []
    )
const showOrders = async () => {
        debugger
        const response = await getHistory(sessionStorage.getItem('id'))
        if (response != null) {
            setorders(response)
        } else {
            console.log("Something went wrong")
        }

    }

    return <>
        <div>
            <Nav></Nav>
            <div>
                <desc /><desc />
                <center><h1 class="mb-3">Order History</h1></center>
                <div className="container" style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <div className="table table-responsive">
                        <table className="table table-bordered" style={{ border: "solid" }}>
                            <tr style={{ backgroundColor: "lightblue", height: "50px" }}>
                              
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Order Date</td>
                                <td>Order Total</td>
                                <td>Remove</td>
                            </tr>
                            {
                                orders.map((order)=>{
                                 return(
                                    <tr style={{ height: "50px" }}>
                                   
                                     <td>{order['pname']}</td>
                                    <td>{order['price']}</td>
                                    <td>{order['qty']}</td>
                                    <td>30/8/2023</td>
                                    <td>{order['price']*order['qty']}</td>
                                    <td><button className="btn btn-danger">Remove</button></td>
                                </tr>
                                 )
                                })
                            }
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </>

}
export default AddProduct;