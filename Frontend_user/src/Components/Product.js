import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import constants from '../Utils/constants'
import { useNavigate } from 'react-router-dom'


export function ProductItem({ product }) {
const navigate=useNavigate()
  const addToCart = async () => {
    
  }

  const details = () => {
   const {imagePath,pname,pdesc,price,avlQty}=product
   sessionStorage['pimage']=imagePath
   sessionStorage['pname']=pname
   sessionStorage['pprice']=price
   sessionStorage['pavlqty']=avlQty
   sessionStorage['pdesc']=pdesc
    navigate('/Productdesc')
}

  return (
    <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
    <div class="card">
        <div class="d-flex justify-content-between p-3">
        </div>
        <center>
            <img src={constants.serverUrl+product['imagePath']} class="card-img-top" alt="Laptop" style={{ height: '150px', width: '150px' }} />
        </center>
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <p class="small"><a href="#!" class="text-muted">Leafy</a></p>
                <p class="small text-danger"><s>20</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">{product['pname']}</h5>
                <h5 class="text-dark mb-0">{product['price']}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Available: <span class="fw-bold">{product['avlQty']}</span></p>
                <p><s><button className="btn btn-primary btn-sm" style={{ marginRight: '20px' }} onClick={details}>Details</button>
                    <button className="btn btn-warning btn-sm" onClick={addToCart}>Add To Cart</button></s></p>
            </div>
           
        </div>
    </div>
</div>

  )
}

export default ProductItem