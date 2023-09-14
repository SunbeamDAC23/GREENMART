import React from 'react'

import { constants } from '../utils/constants'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const CategoryCard = ({category , showCategoryProducts}) => {
    const history = useHistory();


  return (
    <div class="col-md-12 col-lg-4 mb-4 mb-lg-0" style={{margin : '10px'}}>
    <div class="card">
        <div class="d-flex justify-content-between p-3">
        </div>
        <center>
            <img src={constants.serverUrl+'/categories/images/'+category.id} class="card-img-top" alt="Laptop" style={{ height: '150px', width: '150px' }} />
        </center>
        <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">{category['cname']}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
                <p><s><button className="btn btn-primary btn-sm" style={{ marginRight: '20px' }} onClick={()=>{showCategoryProducts(category.id)}}>Show Products</button></s></p>
                <p><s><button className="btn btn-danger btn-sm" style={{ marginRight: '20px' }}>Edit Category</button></s></p>
                    
            </div>
           
        </div>
    </div>
</div>
  )
}
