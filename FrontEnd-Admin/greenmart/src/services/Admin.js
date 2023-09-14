import React from 'react'
import axios from 'axios'
import { createUrl } from '../utils/utils'


export async function authenticate(email,password){
    const body={
        email,password
    }
 const url = createUrl('/admin/authenticate')
    try{
        const response = await axios.post(url,body)
    console.log(response.status)
    console.log(response['data'])
    return response;
    }catch(ex)
    {
        console.log(ex)
        return null;
    }
}