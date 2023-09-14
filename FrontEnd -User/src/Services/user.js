import React from 'react'
import axios from 'axios'
import createUrl from '../Utils/utils'
import  log  from '../Utils/utils'

export async function registerUser(firstName,lastName,email,password
    ,mobile)
{
    const url='http://localhost:8080/users'
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
    const url='http://localhost:8080/users'
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
    const url='http://localhost:8080/users/authenticate'
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


export async function getByid(Id)
{
    debugger;
    const url=`http://localhost:8080/users/byId/${Id}`
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

export async function updateUser(firstName, lastName, email, mobile, password)
{
    debugger
    const body={
        firstName,
        lastName,
        email,
        mobile,
        password,
      
    }
    const url=`http://localhost:8080/users/${sessionStorage.getItem('id')}`
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