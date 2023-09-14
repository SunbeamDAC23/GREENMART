import axios from "axios";
import { createUrl } from "../utils/utils";

export async function getAllOrders()
{
    const url = createUrl('/order')

    const response = await axios.get(url)

    return response.data


}