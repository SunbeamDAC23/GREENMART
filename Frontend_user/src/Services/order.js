import axios from "axios";

export async function addOrder(userId,addressId,status,pId,orderItems,orderTotal)
{
  debugger
  const url='http://localhost:9090/order/neworder'
  const body={
    userId,addressId,status,pId,orderItems,orderTotal
  }
  try{
    const response=await axios.post(url,body)
    console.log(response)
    return(response.data)
 }catch(ex)
 {
   console.log(ex)
   return null
 }
}

export async function addproduct(orderId,pid,qty)
{
  debugger
  const url=`http://localhost:9090/order/${orderId}`
  const body={
    pid,qty
  }
  try{
    const response=await axios.put(url,body)
    console.log(response)
    return(response.data)
 }catch(ex)
 {
   console.log(ex)
   return null
 }
}

export async function loadOrders(oid)
{
  debugger
    const url=`http://localhost:9090/order/cart/${oid}`
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

export async function updateqty(lineId,pid,qty)
{
  debugger
  const url=`http://localhost:9090/order/updateqty/${lineId}`
  const body={
    pid,qty
  }
  try{
    const response=await axios.put(url,body)
    console.log(response)
    return(response.data)
 }catch(ex)
 {
   console.log(ex)
   return null
 }
}


export async function getAllorders(uid)
{
  debugger
  const url=`http://localhost:9090/order/${uid}`
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

export async function getHistory(uid)
{
  debugger
  const url=`http://localhost:9090/order/history/${uid}`
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

export async function removeOrder(pid)
{
  debugger
  const url=`http://localhost:9090/order/delete/${pid}`
  try{
    const response=await axios.delete(url)
    console.log(response)
    return(response.data)
 }catch(ex)
 {
   console.log(ex)
   return null
 }
}