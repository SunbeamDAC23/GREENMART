import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadOrders } from "../Services/order";



function Invoice() {
  const date = new Date()
  const navigate = useNavigate()
  const [product, setproduct] = useState([])
  const [total,settotal]=useState(0)
  const [no,setno]=useState(1)
  const goback = () => {
    sessionStorage.removeItem('line1')
    sessionStorage.removeItem('line2')
    sessionStorage.removeItem('city')
    sessionStorage.removeItem('state')
    sessionStorage.removeItem('pincode')
    navigate('/deliveryaddress')
  }

  const placeOrder = () => {
    sessionStorage.removeItem('line1')
    sessionStorage.removeItem('line2')
    sessionStorage.removeItem('city')
    sessionStorage.removeItem('state')
    sessionStorage.removeItem('pincode')
    sessionStorage.setItem('mod','true')
    navigate('/payment')
  }

  useEffect(() => {
    showOrders()
  }, []
  )
 


  const showOrders = async () => {
    const response = await loadOrders(sessionStorage.getItem('oId'))
    if (response != null) {
      setproduct(response['cart'])
      settotal(response['total'])
    } else {
      console.log("Something went wrong")
    }
  
  }

  return <>
    <Nav></Nav>
    <div class="card">
      <div class="card-body">
        <div class="container mb-5 mt-3">
          <div class="row d-flex align-items-baseline">
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-8">
                <ul class="list-unstyled">
                  <li class="text-muted">To: <span style={{ color: '#5d9fc5' }}>{sessionStorage.getItem('firstName')} {sessionStorage.getItem('lastName')}</span></li>
                  <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                    class="fw-bold">Address: </span>{sessionStorage.getItem('line1')},
                    {sessionStorage.getItem('line2')},
                    {sessionStorage.getItem('city')},
                    {sessionStorage.getItem('state')},
                    {sessionStorage.getItem('pincode')}</li>
                </ul>
              </div>
              <div class="col-xl-4">
                <ul class="list-unstyled">

                  <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                    class="fw-bold">Creation Date: </span>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</li>
                </ul>
              </div>
            </div>

            <div class="row my-2 mx-1 justify-content-center">
              <table class="table table-striped table-borderless">
                <thead style={{ backgroundColor: '#84B0CA' }} class="text-white">
                  <tr>
                    <th scope="col">SrNo</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    product.map((order)=>{
                     return(<tr>
                    <th scope="row">{no}</th>
                    <td>{order['pname']}</td>
                    <td>{order['qty']}</td>
                    <td><span>&#8377; </span>{order['price']}</td>
                    <td><span>&#8377; </span>{order['total']}</td>
                  </tr>
                  )
                      })
                  }
                </tbody>

              </table>
            </div>
            <div class="row">
              <div class="col-xl-8">
              </div>
              <div class="col-xl-3">
                <ul class="list-unstyled">
                  <li class="text-muted ms-3"><span class="text-black me-3">SubTotal :</span><span>&#8377; </span>{total}</li>
                  <li class="text-muted ms-3 mt-2"><span class="text-black me-3">Delivery Charges :</span><span>&#8377; </span>100</li>
                </ul>
                <p class="text-black float-start"><span class="text-black me-3"> Total Amount :</span><span
                  style={{ fontSize: '25px' }}><span>&#8377; </span>{total+100}</span></p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-xl-10">
                <button className="btn btn-warning" onClick={goback}>Back</button>
              </div>
              <div class="col-xl-2">
                <button type="button" class="btn btn-primary text-capitalize"
                  style={{ backgroundColor: '#60bdf3' }} onClick={placeOrder}>Pay Now</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
}
export default Invoice;