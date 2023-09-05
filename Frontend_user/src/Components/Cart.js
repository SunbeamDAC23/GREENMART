import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Nav"
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { loadOrders } from "../Services/order";
import { useNavigate } from "react-router-dom";
import Cartitem from "./Cartitem";
import './Nav.css'


function AddProduct() {
  const [product, setproduct] = useState([])
  sessionStorage.setItem('totalamount', 0)
  sessionStorage.setItem('mod', 'true')
  sessionStorage.setItem('orderId', 1)
  useEffect(() => {
    showOrders()
  }, []
  )
  const showOrders = async () => {
    debugger
    const response = await loadOrders(sessionStorage.getItem('oId'))
    if (response != null) {
      setproduct(response['cart'])
    } else {
      console.log("Something went wrong")
    }

  }

  const navigate = useNavigate()
  const Addproduct = () => {
    navigate('/deliveryaddress');
  }


  return <>
    <div>
      <Nav></Nav>
      <div>
        <desc /><desc />
        <center> <h1 class="mb-3">Cart</h1></center>
        <div className="container" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="table table-responsive">
            <table className="table table-bordered" style={{ border: "solid" }}>
              <tr style={{ backgroundColor: "lightblue", height: "50px" }}>
                <td>Sr No</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Remove</td>
              </tr>

              {
                product.map((product) => {
                  const total = parseFloat(sessionStorage.getItem('totalamount')) + parseFloat(product['price'])
                  sessionStorage.setItem('totalamount', total)
                  return (
                    <Cartitem product={product} />
                  )
                })
              }
            </table>
            <a href="/deliveryaddress" style={{ float: "right" }} onClick={Addproduct} className="btn btn-primary">Place Order</a>
            <br/>
            <div><br/><br/></div>
          </div>
        </div>
      </div>
    </div>
  </>

}
export default AddProduct;