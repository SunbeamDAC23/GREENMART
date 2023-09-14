import React from 'react'
import Sidebar from './Sidebar'
import { getCategories } from '../services/Categories'
import { useState } from 'react'
import { useEffect } from 'react'
import { CategoryCard } from './CategoryCard'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
export const Categories = () => {

      const history = useHistory();

        const [categories, setCategories] = useState([])
        useEffect(()=>{loadCategories()},[])
        const loadCategories = async ()=>{
          const response = await getCategories();
          console.log(response.data);
          setCategories(response.data)
        }
        const showCategoryProducts = (Cid)=>{
          console.log(`/admin/category/products/${Cid}`+"....callled")
          history.push(`/admin/category/products/${Cid}`)
      }
      const upperStyle={backgroundColor:'rgb(183, 246, 228)'}
      const divStyle={display : 'flex',flexWrap :'wrap',justifyContent : 'center',backgroundColor:'teal'}
  return (
    <>
    <Sidebar></Sidebar>
    <div className='container' style={{marginBottom:'30px',marginTop:'-30px'}}>
    <center >
    <button className='btn btn-block btn-success' style={{marginBottom:'30px'}}>Add New Category</button><br></br>
    </center>
    </div>
    <div className='main' style={divStyle}>
      
        {
          categories.map((category , key)=>{  
            
            return <CategoryCard category={category} showCategoryProducts={showCategoryProducts}/>
          })
        }
    </div>
    
    </>
    )
}
