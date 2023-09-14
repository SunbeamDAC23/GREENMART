import { useDispatch } from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import constants from '../Utils/constants'
import { useNavigate } from 'react-router-dom'
import { addOrder } from '../Services/order'
import { addproduct } from '../Services/order';
import { useState } from 'react'

export function ProductItem({ product }) {
    const date = new Date()
    
    sessionStorage['productId'] = product['id']
    const proId = parseInt(sessionStorage.getItem('productId'))
    const qty = Number('1')
    const navigate = useNavigate()
    const orderItems = [{ proId, qty }]
    const addressId = 1
    const status = 'Not delivered'
    const addToCart = async () => {
        debugger
        if (sessionStorage.getItem('mod')=='true') {
            const response = await addOrder(
                parseInt(sessionStorage.getItem('id')),
                addressId,
                status,
                proId,
                orderItems,
                product['price']
            )
            if (response != null) {
                sessionStorage.setItem('oId',response.id)
                 sessionStorage.setItem('orderId',response.id)
                toast.success('Product added to cart')
                sessionStorage.setItem('mod','false')
            } else {
                toast.error('Something went wrong')
            }
        } else {
          
            const response=await addproduct(
               sessionStorage.getItem('orderId'),proId,qty
            )
            if (response != null) {
                debugger
                toast.success('Product added to cart')
                
            } else {
                toast.error('Something went wrong')
            }
        }
    }

    const details = () => {
        const { imagePath, pname, pdesc, price, avlQty } = product
        sessionStorage['pimage'] = imagePath
        sessionStorage['pname'] = pname
        sessionStorage['pprice'] = price
        sessionStorage['pavlqty'] = avlQty
        sessionStorage['pdesc'] = pdesc
        navigate('/Productdesc')
    }

    return (<>
        <ToastContainer />
        <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
                <div class="d-flex justify-content-between p-3">
                </div>
                <center>
                    <img src={constants.serverUrl+'products/images/'+product.id} class="card-img-top" alt="Laptop" style={{ height: '150px', width: '150px' }} />
                </center>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <p class="small">{product['category']}</p>
                        
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                        <h5 class="mb-0">{product['pname']}</h5>
                        <h5 class="text-dark mb-0"><span>&#8377; </span>{product['price']}</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                        <p class="text-muted mb-0">Available: <span class="fw-bold">{product['avlQty']}</span></p>
                        <p><s><button className="btn btn-primary btn-sm" style={{ marginRight: '20px' }} onClick={details}>Details</button>
                            <button className="btn btn-warning btn-sm" onClick={addToCart}>Add To Cart</button></s></p>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}

export default ProductItem