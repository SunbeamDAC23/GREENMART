import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Nav"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import background from '../vegetables.jpg'

function AddProduct() {
    const navigate =useNavigate()
    const Addproduct = () => {
        navigate('/deliveryaddress');
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
                                <td>SrNo</td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Order Date</td>
                                <td>Order Total</td>
                                <td>Remove</td>
                            </tr>
                            <tr style={{ height: "50px" }}>
                                <td>1</td>
                                <td>Cabbage</td>
                                <td>10</td>
                                <td>5</td>
                                <td>2023-08-25</td>
                                <td>50</td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </>

}
export default AddProduct;