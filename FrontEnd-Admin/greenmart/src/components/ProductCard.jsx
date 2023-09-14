import React from 'react'
import { constants } from '../utils/constants'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export const ProductCard = ({product , goToEditPage}) => {
    const history = useHistory();
 const getDetails=()=>{
 }



  return (
    <div class="col-md-12 col-lg-4 mb-4 mb-lg-0" style={{margin : '10px'}}>
    <div class="card">
        <div class="d-flex justify-content-between p-3">
        </div>
        <center>
            <img src={constants.serverUrl+'/products/images/'+product.id} class="card-img-top" style={{ height: '150px', width: '150px' }} />
        </center>
        <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">{product['pname']}</h5>
                <h5 class="text-dark mb-0">₹ {product['price']}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Available: <span class="fw-bold">{product['avlQty']}</span></p>
                <p><s><button className="btn btn-primary btn-sm" style={{ marginRight: '20px' }}>Details</button></s></p>
                <p><s><button className="btn btn-danger btn-sm" style={{ marginRight: '20px' }} onClick={()=>{goToEditPage(product.id)}}>Edit Product</button></s></p>
                    
            </div>
           
        </div>
    </div>
</div>
  )
}
