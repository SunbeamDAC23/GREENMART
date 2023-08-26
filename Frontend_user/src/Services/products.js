import axios from "axios";
import createUrl from '../Utils/utils'
import  log  from '../Utils/utils'

export async function loadProducts()
{
  debugger
    const url='http://localhost:7070/products'
    try{
       const response=await axios.get(url)
       console.log(response)
       return(response.data)
    }catch(ex)
    {
      console.log(ex)
      return null
    }
}
