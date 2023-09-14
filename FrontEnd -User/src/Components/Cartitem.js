import { useState,useEffect } from "react";
import { addproduct } from '../Services/order';
import { updateqty } from "../Services/order";
import { removeOrder } from "../Services/order";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

function Cartitem({product})
{
    const[qty,setqty]=useState(product['qty'])
    const[amount,setamount]=useState(product['price']*product['qty'])


const remove=async ()=>{

  const response=await removeOrder(product['lineId'])
  if(response!=null)
  {
         
  }else{
  toast.error('Product removed')
  }
}

   const plus=()=>{
    debugger 
    setqty(qty+1)
  setamount(amount+product['price'])
    const total=parseFloat(sessionStorage.getItem('totalamount'))+parseFloat(product['price'])
    sessionStorage.setItem('totalamount',total)
    updateQty(qty+1)
   }

   const updateQty= async(q)=>{
    const response=await updateqty(
        product['lineId'],product['productId'],q
     )
   }

   const minus=()=>{
    setqty(qty-1);
    setamount(amount-product['price'])
    const total=parseFloat(sessionStorage.getItem('totalamount'))-parseFloat(product['price'])
    sessionStorage.setItem('totalamount',total)
    updateQty(qty-1)
   }


    return(<>
      <ToastContainer/>
        <tr style={{height:"50px"}}>
        <td>1</td>
        <td>{product['pname']}</td>
        <td><span>&#8377; </span>{product['price']}</td>
        <td>
        <div class="input-group" style={{width:"100px"}}>
          <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                <span class="glyphicon glyphicon-minus" onClick={plus}>+</span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value={qty} min="1" max="100"/>
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                  <span class="glyphicon glyphicon-plus" onClick={minus}>-</span>
              </button>
          </span>
      </div>
        </td>
        <td><span>&#8377; </span>{amount}</td>
        <td><button className="btn btn-danger" onClick={remove}>Remove</button></td>
    </tr>
    </>
    )

}
export default Cartitem;