import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Nav"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import background from '../vegetables.jpg'

function AddProduct()
{
  
  const navigate =useNavigate()
const Addproduct=()=>{
  navigate('/deliveryaddress');
   }


    return<>
        <div>
   <Nav></Nav>
  <div>

  <desc/><desc/>
  <center> <h1 class="mb-3">Cart</h1></center>
  <div className="container" style={{marginLeft:"auto",marginRight:"auto"}}>
 <div className="table table-responsive">
<table className="table table-bordered" style={{border:"solid"}}>
    <tr style={{backgroundColor:"lightblue",height:"50px"}}>
        <td>Sr No</td>
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Amount</td>
        <td>Remove</td>
    </tr>
    <tr style={{height:"50px"}}>
        <td>1</td>
        <td>Cabbage</td>
        <td>10</td>
        <td>
        <div class="input-group" style={{width:"100px"}}>
          <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                <span class="glyphicon glyphicon-minus">+</span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="10" min="1" max="100"/>
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                  <span class="glyphicon glyphicon-plus">-</span>
              </button>
          </span>
      </div>
        </td>
        <td>Amount</td>
        <td><button className="btn btn-danger">Remove</button></td>
    </tr>
    <tr style={{backgroundColor:"lightblue",height:"50px"}}><td> </td><td> </td><td> </td><td> </td><td colSpan={6}>Total Bill:</td></tr>
    </table>
    <a href="/deliveryaddress" style={{float:"right"}} onClick={Addproduct} className="btn btn-primary">Place Order</a>
 </div>
  </div>

  </div>
   </div>
          </>
    
}
export default AddProduct;