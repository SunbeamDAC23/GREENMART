import React, { Component } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../app.css'
import {table} from 'react-bootstrap'
import Sidebar from '../Sidebar';
import Category from './Category';
function ProductToAdd() {

    const history = useHistory();

    const GoToProduct = () => {
        history.push('/Product')
    }

    return (<>

    <Sidebar></Sidebar>
    <div className='main'>
        <h2>Add New Product</h2>
        <hr></hr>
        <center>
        <table className=' table-responsive'>
            <tr>
                <td>Product Name
                <input type='text'></input>
                </td>
                <td>
                <label>Choose a Category</label>
                <select name='Select Category'>
                    <option>Leafy Vegetables</option>
                    <option>Green Vegetables</option>
                    <option>Fruits</option>
                    <option>Marrow</option>
                    <option>Root</option>
                    <option>Edible Plant Stem</option>
                    <option>Allium</option>
                </select>
                </td>
            </tr>
            <tr>
            <td>Product Price :
                <input type='number'></input>
                </td> 
            </tr>
            <tr>
            <td colSpan='2'>
            Description :
            
            </td>
            </tr>
            <tr>
            <textarea rows = "5" cols = "60" name = "description">
            Enter details here...
         </textarea>
            </tr>

        </table>
        <hr></hr>
        <button className='btn btn-block btn-success' onClick={GoToProduct}>Add Product</button>
        </center>

    </div>
    

    
    
    
    </>  );
}

export default ProductToAdd;