import React from 'react'
import axios from 'axios'
import { createUrl } from '../utils/utils'


export async function getProducts(){

    const url = createUrl('/products')
    const response = await axios.get(url)
    console.log(response.status)
    console.log(response['data'])
    return response;
}

export async function getProductsByCategory(id)
{
    console.log(id)
    const url = createUrl('/products/'+id)
    console.log(url)
    const response = await axios.get(url)
    console.log(response.status)
    console.log(response['data'])
    return response;
}

export async function getSingleProduct(pid)
{
    console.log("Product Id : "+pid)
    const url = createUrl('/products/single/'+pid)
    console.log(url)
    const response = await axios.get(url)
    console.log(response.status)
    console.log(response['data'])
    return response;
}

/*private String pname;
	private String pdesc
	private double price;
	private double avlQty;
	private Long category_id;*/ 

export async function addNewProduct(pname,pdesc,price,avlQty,category_id){
    const url = createUrl('/products/newProduct')
    const body={pname,pdesc,price,avlQty,category_id}
    
    try {
        const response = await axios.post(url,body)
        console.log(response.data)
        return response.data
    } 
    catch (error) {
        console.log(error)
        return null
    }

    
}
export async function editProduct(pid,pname,pdesc,price,avlQty,category_id,selectedFile){
    console.log(pid +pname+ pdesc +price+ avlQty+"....in edit product")
    const url = createUrl('/products/update/'+pid)
    console.log(url + ".....in editProductService")
    const body={pname,pdesc,price,avlQty,category_id}
    
    try {
        const formdata = new FormData();
        formdata.append('imageFile',selectedFile)
        const url2 = createUrl('/products/images/'+pid)
        const response2= await axios.post(url2,formdata)
        const response  = await axios.put(url,body)
        
        console.log(response2)
        console.log(response.data)
        return response.data
    } 
    catch (error) {
        console.log(error)
        return null
    }

    
}

