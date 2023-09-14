import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getProducts } from '../services/Products'
import { constants } from '../utils/constants'
import { ProductCard } from './ProductCard'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Products = () => {

  const history=useHistory();

  const [products, setProducts] = useState([])

  useEffect(()=>{loadProducts()},[])

  const loadProducts = async ()=>{
    const responseProducts = await getProducts();
    console.log(responseProducts.data);
    setProducts(responseProducts.data)
  }

  const goToNewProductPage=()=>{
    history.push("/admin/products/newproduct")
  }

  const goToEditPage=(pid)=>{
    history.push(`/admin/products/edit/${pid}`)
  }


const div2Style={display : 'flex',flexWrap :'wrap',justifyContent : 'center',backgroundColor:'bisque'}
  return (
    <>
    <Sidebar></Sidebar>
    <center>
    <button className='btn btn-block btn-success' style={{marginBottom:'30px',marginTop:'-30px'}} onClick={()=>{goToNewProductPage()}}>Add New Product</button><br></br>
    </center>
      
    <div className='main' style={div2Style}>
      
        {
          products.map((product , key)=>{  
            
            return <ProductCard product={product}  goToEditPage={goToEditPage}></ProductCard>
          })
        }
    </div>
    </>
  )
}
