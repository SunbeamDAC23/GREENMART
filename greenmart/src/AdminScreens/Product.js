import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import { useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../app.css'
function Product() {

  const history = useHistory();

    const [Products , setProducts] =useState([
        {
            id: 1,
            pName : "Cabbage",
            category : "Leafy Vegetable",
            price : 30,
            description : "Cabbage gives you doses of fiber, folate, potassium, magnesium, vitamins A and K, and more",
            imagePath : "http://localhost:3000/images/cabbage.jpg"
            
          },
          {
            id: 2,
            pName : "Spinach",
            category : "Leafy Vegetable",
            price : 20,
            description : "Spinach also contains several other vitamins and minerals, including potassium, magnesium, and vitamins B6, B9, and E.",
            imagePath : "http://localhost:3000/images/spinach.jpg"
          },
          {
            id: 3,
            pName : "Tomatoes",
            category : "Tomatoes",
            price : 70,
            description : "Tomatoes are low in calories and provide important nutrients like vitamin C and potassium.",
            imagePath : "http://localhost:3000/images/tomatoes.jpg"
            
          },
          {
            id: 4,
            pName : "Pumpkin",
            category : "Marrow",
            price : 65,
            description : "It offers a long list of nutrients that protect and support the heart, such as vitamins A, B1, B6, and C, copper, fiber, folate, and manganese.",
            imagePath : "http://localhost:3000/images/pumpkin.jpg"
          },
          {
            id: 5,
            pName : "Grapes",
            category : "Fruits",
            price : 90,
            description : "As you can see, grapes are a rich source of copper and vitamin K.",
            imagePath : "http://localhost:3000/images/grapes.jpg"
          }
    ]);

    const Delete = ()=>{

    }

    const GoToAddProduct = () => {

      history.push('/AddProduct')

    }

    const Edit = ()=>{

    }

    return ( <>
    <Sidebar></Sidebar>
    <div className="main">
        <center>
            <button className='btn btn-block btn-success' style={{marginLeft : '85%'}} onClick={GoToAddProduct}>Add Product</button>
            <br></br>
            <br></br>
        <table className='table table-bordered table-responsive'>
           <tbody>
            <tr>
                <th>S. No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
          
            
            {
                Products.map((product , key)=>{
                  return  <tr key={product.id}>
                    
                        <td>{product.id}</td>
                        <td>
                            <img src={product.imagePath} className='imageStyle'></img>
                        </td>
                        <td>{product.pName}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <button className='btn btn-sm btn-info' onClick={Edit}>Edit</button>
                            <button className='btn btn-sm btn-danger' onClick={Delete}>Delete</button>
                        </td>
                    </tr>
                })
            }
           </tbody>

        </table>
        </center>

    </div>
    </> );
}

export default Product;