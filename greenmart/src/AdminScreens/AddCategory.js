import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddCategory() {

const history = useHistory(); 
    
const GoToCategory = () => {

    history.push('/Category');

}

    return ( <>
    <Sidebar></Sidebar>
     <div className='main'>
        <center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        Category :&nbsp;&nbsp;       
    <input type='text' placeholder='Enter Category name'></input>
    <br></br>
    <br></br>
    <button className='btn btn-secondary' onClick={GoToCategory}>Add Category</button>
    
        </center>
     </div>
     </> );
}

export default AddCategory;