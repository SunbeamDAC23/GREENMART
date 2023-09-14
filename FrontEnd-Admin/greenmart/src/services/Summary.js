import React from 'react'
import axios from 'axios'
import { createUrl } from '../utils/utils'
export async function getSummary(){
  
    const url = createUrl('/admin/dashboard')

    const response = await axios.get(url)

    console.log(response.status)

    console.log(response['data'])

   

    return response;

  

}
