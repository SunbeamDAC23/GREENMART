import React from 'react'
import axios from 'axios'
import createUrl from '../Utils/utils'
import  log  from '../Utils/utils'

export async function registerUser(firstName,lastName,email,password
    ,mobile)
{
    const url='http://localhost:7070/users'
    const body={
        firstName,
        lastName,
        email,
        password,
        mobile
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

export async function getUser()
{
    debugger;
    const url='http://localhost:9090/users'
    try{
    const response=await axios.get(url)
    log(response.data)
    return response.data
    }catch(ex)
    {
        console.log(ex)
        return null
    }
}

export async function loginuser(email,password)
{
    debugger;
    const url='http://localhost:7070/users/authenticate'
    const body={
        email,password
    }
    try{
     const response=await axios.post(url,body)
     log(response.data)
     return(response)
    }catch(ex)
    {
        console.log(ex)
        return null
    }
}


export async function changePassword(firstName, lastName, email, mobile, password)
{
    const body={
        firstName,
        lastName,
        email,
        password,
        mobile
    }
    const url=`http://localhost:7070/users/${sessionStorage.getItem('id')}`
    try{
        const response=await axios.put(url,body)
        log(response.data)
        return(response)
       }catch(ex)
       {
           console.log(ex)
           return null
       }

}