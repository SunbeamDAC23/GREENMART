import axios from 'axios';
import createUrl from '../Utils/utils'
import  log  from '../Utils/utils'

export async function registerAddress(line1,line2,city,state,pincode,uid)
{
  debugger;
    const url='http://localhost:8080/address/newAddress'
    
    const body={
        line1,
        line2,
        city,
        state,
        pincode,
        uid
    }
    try{
        const response=await axios.post(url,body);
        log(response.data)
        return response.data
        }catch(ex)
        {
          log(ex)
          return null;
        }
}

export async function loadAddress(Id)
{
  debugger;
  const url=(`http://localhost:8080/address/${Id}`)
   try{
    const response=await axios.get(url)
    return(response.data)
   }catch(ex)
   {
      console.log(ex)
      return null
   }

}