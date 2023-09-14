import React from "react";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from './Nav'
import { useNavigate } from "react-router-dom";
import Dashboard1 from "./Dashboard1";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { loadCat } from "../Services/category";
import '../../node_modules/bootstrap/js/dist/dropdown.js'
import { loadBycat } from "../Services/products";
import ProductItem from "./Product";

function SearchPage() {
  const [toggle, setToggle] = useState(true)
  const [category, setcategory] = useState([])
  const [products, setproducts] = useState([])

 const navigate=useNavigate()

  useEffect(() => {
    showCategory()
  }, []
  )
  const showCategory = async (Id) => {
    debugger
    const response = await loadCat()
    if (response != null) {
      setcategory(response)
    } else {
      console.log("Something went wrong")
    }

  }

const back=()=>{
  setToggle(true)
  //navigate('/SearchPage')
}


  const showProducts = async (Id) => {
    debugger
    setToggle(!toggle)
    const response = await loadBycat(Id)
    if (response != null) {
      setproducts(response)
    } else {
      console.log("Something went wrong")
    }
  }

  return (
   
   <div>
    {
        (toggle) ?
        <>
      <Nav/>
      <br />
      <div class="dropdown show">
     <h3>Search by Category :</h3> <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Category
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {
            category.map((cat) => {
              return (
                <Link className="nav-link" onClick={() => { showProducts(cat['id']) }} >{cat['cname']}</Link>
              )
            })
          }
        </div>
      </div>
      <br/>
       <Dashboard1/></>:
       
        <div>
          <Nav/>
        {
          <section style={{ backgroundColor: "#eee" }}>
           <br/> <button className="btn btn-warning" onClick={back}>Back</button>
            <div class="container py-5">
              <div class="row">
                {
                  products.map((product) => {
                    return (
                      <ProductItem product={product} />
                    )
                  })
                }
              </div>
            </div>
          </section>
        }
      </div>
      }
    </div>
  )
}
export default SearchPage;