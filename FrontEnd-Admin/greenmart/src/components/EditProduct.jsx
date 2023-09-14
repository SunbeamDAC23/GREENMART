import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { addProductImage, editProduct, getSingleProduct } from '../services/Products'
import { getCategories } from '../services/Categories'

export const EditProduct = () => {

  const {pid} = useParams();

  const [category, setCategory] = useState([]);


  const [pname,setPname]=useState('')
  const [pdesc,setDetails]=useState('')
  const [price,setPrice]=useState('')
  const [avlQty,setQuantity]=useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [category_id, setcategory_id]=useState(0)

  const fetchProduct=async ()=>{
    console.log(pid)
    const response = await getSingleProduct(pid)
    console.log(response.data);
    console.log("fetchProduct called")
    setPname(response.data.pname)
    setDetails(response.data.pdesc)
    setPrice(response.data.price)
    setQuantity(response.data.avlQty)
  }
  useEffect(()=>{loadCategories()},[])


  const loadCategories = async ()=>{
      const response = await getCategories();
      setCategory(response.data)
  }

  const updateProduct=async()=>{
    const response1 = await editProduct(pid,pname,pdesc,price,avlQty,category_id,selectedFile)
       console.log(response1)
    
//update product
  }

  const handleSelectChange = (event)=>{
    setcategory_id(event.target.value)

}
const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]);
};

  useEffect(()=>{ 
    fetchProduct()
  },[])

  

  const ulStyle = {
         border: '2px solid green', borderRadius: 10,width: '45%', listStyleType: 'none',
         marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'lightgreen',marginTop:'20px'
       }
       const inStyle = { height: '40px' }
     const divStyle={backgroundColor:'bisque' ,height:'100vh',width:'100vw'}
     return (
      <>
       <Sidebar></Sidebar>
       <div className='main'>
       <div className="card">
           <div className="card-body" style={ulStyle}>
           <form onSubmit={updateProduct}>
               <div class="row">
                 <div class="col-md-6 mb-4">
                  
                   <div class="form-outline">
                     <label class="form-label" for="pname">Product ID</label>
                     <input type="number" id="pid" class="form-control form-control-md" style={inStyle} value={pid}
                      />
                   </div>
                 </div>
                 <div class="col-md-6 mb-4">
                   <div class="form-outline">
                     <label class="form-label" for="pname">Product Name</label>
                     <input type="text" id="pname" class="form-control form-control-md" style={inStyle} value={pname}
                       onChange={(e) => {setPname(e.target.value) }} />
                   </div>
                 </div>
                 <div class="col-md-6 mb-4">
   
                   <div class="form-outline">
                     <label class="form-label" for="pdesc">Product Description</label>
                     <input type="text" id="pdesc" class="form-control form-control-md" style={inStyle} value={pdesc}
                       onChange={(e) => { setDetails(e.target.value) }} />
                   </div>
   
                 </div>
               </div>
   
               <div class="row">
                 <div class="col-md-6 mb-4">
                   <div class="form-outline">
                     <label class="form-label" for="price">Price</label>
                     <input type="number" id="price" class="form-control form-control-md" style={inStyle} value={price}
                       onChange={(e) => { setPrice(e.target.value) }} />
                   </div>
   
                 </div>
                 <div class="col-md-6 mb-4">
                   <div class="form-outline">
                     <label class="form-label" for="avlQty">Available Quantity</label>
                     <input type="number" id="qty" class="form-control form-control-md" style={inStyle} value={avlQty}
                       onChange={(e) => { setQuantity(e.target.value) }} />
                   </div>
                 </div>
                 <div class="col-md-6 mb-4">
                   <div class="form-outline">
                     <label class="form-label" for="avlQty">Image</label>
                     <input type="file" id="qty" class="form-control form-control-md" style={inStyle}
                       onChange={handleFileChange} />
                   </div>
                 </div>

                 <select name='category' value={category_id} onChange={handleSelectChange}>
            {
                category.map((c, key)=>{
                    
                    return <option value={c.id}>{c.cname}</option>

                })
            }
            </select>
                 
               </div>
               
                <center>
                 <button type="submit" class="btn btn-primary btn-block btn-md gradient-custom-4 text-body">Editt</button>
               </center>
             </form>
   
           </div>
       </div>
       </div>
      </>
     )
   }
   
   