import React from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getProductsByCategory } from '../services/Products';
import { useState } from 'react';
import { useEffect } from 'react';
import { ProductCard } from './ProductCard';


export const ProductsByCategory = () => {
    const {cId} = useParams();
    console.log(cId)
    const [CategoryProducts, setCategoryProducts] = useState([])

    useEffect(()=>{getProducts()},[])

  const getProducts = async ()=>{
    const responseProducts = await getProductsByCategory(cId);
    console.log(responseProducts.data);
    setCategoryProducts(responseProducts.data)
  }
  return (
    <>
    <Sidebar></Sidebar>
    <div className='main'></div>
    <div className='main' style={{display : 'flex',flexWrap :'wrap',justifyContent : 'center'}}>
      
        {
          CategoryProducts.map((product , key)=>{  
            
            return <ProductCard key={product.id} product={product}></ProductCard>
          })
        }
    </div>
    </>
  )
}
