import axios from "axios";
import createUrl from '../Utils/utils'
import  log  from '../Utils/utils'

export async function loadCat()
{
  debugger
  const url="http://localhost:8080/products/getCat"
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