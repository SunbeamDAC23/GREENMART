import axios from "axios";
import { createUrl } from "../utils/utils";

export async function getAllUsers()
{
    const url=createUrl('/users')
    const response = await axios.get(url)
    return response.data;
}

export async function registerUser()
{

}

export async function updateUser()
{

}

export async function getaddress(id)
{
    const url = createUrl('/address/'+id)
    console.log(url)
    const response= await axios.get(url)
    console.log(response.data);
    console.log(response)
    console.log(response['status'])
    if(response['status'] === 204)
    {
        return "no address available"
    }
    return response.data
}

export async function getOrders(uid)
{
    const url = createUrl('/order/'+uid)
    const response = await axios.get(url)
    console.log(response.data)
    console.log(response['status'])
    if(response['status'] === 204)
    {
        return "no orders available"
    }

    return response.data
}