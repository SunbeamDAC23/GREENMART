import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
function Invoice() {
  const date = new Date()
  const navigate = useNavigate()

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
    navigate('/Viewproduct')
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
                    class="fw-bold">ID:</span>#123-456</li>
                  <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                    class="fw-bold">Creation Date: </span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</li>
                </ul>
              </div>
            </div>

            <div class="row my-2 mx-1 justify-content-center">
              <table class="table table-striped table-borderless">
                <thead style={{ backgroundColor: '#84B0CA' }} class="text-white">
                  <tr>
                    <th scope="col">SrNo</th>
                    <th scope="col">Description</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cabbage</td>
                    <td>4</td>
                    <td>200</td>
                    <td>800</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Tomato</td>
                    <td>1</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Consulting</td>
                    <td>2</td>
                    <td>300</td>
                    <td>600</td>
                  </tr>
                </tbody>

              </table>
            </div>
            <div class="row">
              <div class="col-xl-8">
              </div>
              <div class="col-xl-3">
                <ul class="list-unstyled">
                  <li class="text-muted ms-3"><span class="text-black me-4">SubTotal :</span>1110</li>
                  <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%) :</span>111</li>
                </ul>
                <p class="text-black float-start"><span class="text-black me-3"> Total Amount :</span><span
                  style={{ fontSize: '25px' }}>1221</span></p>
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