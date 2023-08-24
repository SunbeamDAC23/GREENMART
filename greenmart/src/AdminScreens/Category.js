import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import { useState , useEffect } from 'react';
import '../app.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Category() {

    const history = useHistory();
    const [categories , setCategories] = useState([
        {
            catId : 1,
            catName : "Green Vegetables"
        },
        {
            catId : 2,
            catName : "Leafy Vegetables"
        },
        {
            catId : 3,
            catName : "Marrow"
        },
        {
            catId : 4,
            catName : "Root"
        },
        {
            catId : 5,
            catName : "Edible Plant Stem"
        },
        {
            catId : 6,
            catName : "Allium"
        },
        {
            catId : 7,
            catName : "Fruits"
        },
    ]);

    const Edit = () => {}
    const Delete = () => {}

    const GoToAddCategory = () => {
        history.push('/AddCategory')

    }


    return ( <>
    <Sidebar></Sidebar>
   <div className='main'>
    <button className='btn btn-block btn-success' onClick={GoToAddCategory}>Add Category</button>
    <br></br><br></br><br></br>
  <center>
  <table className='table table-bordered table-responsive' style={{width : '600px'}}>
        <tr>
        <th>S. No</th>
        <th>Category Name</th>
        <th>Actions</th>
        </tr>
        {
            categories.map((category , key)=>{
                return <tr key={category.catId}>
                       <td>{category.catId}</td>
                       <td>{category.catName}</td>
                       <td>
                        <button className='btn btn-block btn-info' onClick={Edit}>Edit</button> | <button className='btn btn-danger' onClick={Delete}>Delete</button>
                        </td> 
                </tr>
            })
        }
        
    </table>

  </center>
   </div>
    
    </> );
}

export default Category;