import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { loadProducts } from "../Services/products";
import ProductItem from "./Product";

function AddProduct() {
    const navigate = useNavigate()

    const [products, setproducts] = useState([])
    sessionStorage.setItem('mod','true')
    sessionStorage.setItem('orderId',1)   
    useEffect(() => {
        showProducts()
    }, []
    )

    const showProducts = async () => {
        const response = await loadProducts()
        if (response != null) {
            setproducts(response)
        } else {
            console.log("Something went wrong")
        }

    }

    
    return (<>
        <body>
            <Nav></Nav>
            <section style={{ backgroundColor: "#eee" }}>
                <div class="container py-5">
                    <div class="row">
                        {
                            products.map((product) => {
                                return (
                                    <ProductItem product={product}/>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </section>
        </body>


    </>);
}

export default AddProduct;