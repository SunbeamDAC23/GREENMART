import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { getCategories } from '../services/Categories';
import { ToastContainer,toast } from 'react-toastify';
import { useEffect } from 'react';
import { addNewProduct } from '../services/Products';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export const NewProduct = () => {

    const [category, setCategory] = useState([]);

     const [pname, setpname] = useState('')
     const [pdesc, setpdesc] = useState('')
     const [price, setprice] = useState(0)
     const [avlQty, setavlQty] = useState(0)
     const [category_id,setcategory_id] = useState(0)
    const history = useHistory();

    const inStyle = { height: '30px' }
    const ulStyle = {
        border: '2px solid green', borderRadius: 10, width: '55%', listStyleType: 'none',
        marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'lightgreen',marginTop:'50px'
      }
      
    /*
    private String pname;
	private String pdesc
	private double price;
	private double avlQty;
	private Long category_id;
    */ 
    useEffect(()=>{loadCategories()},[])


    const loadCategories = async ()=>{
        const response = await getCategories();
        setCategory(response.data)
    }

    const handleSelectChange = (event)=>{
        setcategory_id(event.target.value)

    }

    const addProduct = async()=>{
        console.log("addproduct called")
        console.log("..."+pname+"..."+pdesc+"..."+price+"..."+avlQty+"..."+category_id)
        if(pname.length == ''){
            toast.error("Please Enter Product Name")
        }
        if(pdesc.length == ''){
            toast.error("Please Enter Product Description")
        }
        if(price == 0){
            toast.error("Please Enter Product Price")
        }
        if(avlQty == 0){
            toast.error("Please Enter Product Available Quantity")
        }
        if(category_id == 0){
            toast.error("Please Select Category")
        }
        else{
            const response1 = await addNewProduct(pname,pdesc,price,avlQty,category_id)
            console.log(response1)

        }
    }    
  return (
   <>
    <Sidebar></Sidebar>
    <div className='main'>
    <div className="card">
        <div className="card-body" style={ulStyle}>
        <form onSubmit={addProduct}>
            <div class="row">
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="pname">Product Name</label>
                  <input type="text" id="pname" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setpname(e.target.value) }} />
                </div>
              </div>
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="pdesc">Product Description</label>
                  <input type="text" id="pdesc" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setpdesc(e.target.value) }} />
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="price">Price</label>
                  <input type="number" id="price" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setprice(e.target.value) }} />
                </div>

              </div>
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="avlQty">Available Quantity</label>
                  <input type="number" id="qty" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setavlQty(e.target.value) }} />
                </div>
              </div>
            </div>
            <label for="categories">Choose a Category</label>
            <select name='category' value={category_id} onChange={handleSelectChange}>
            {
                category.map((c, key)=>{
                    
                    return <option value={c.id}>{c.cname}</option>

                })
            }
            </select>
                        <center>
              <button type="submit" class="btn btn-primary btn-block btn-md gradient-custom-4 text-body">Submit New Product</button>
            </center>
          </form>

        </div>
    </div>
    </div>
   </>
  )
}

