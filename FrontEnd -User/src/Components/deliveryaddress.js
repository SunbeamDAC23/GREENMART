import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";
import Address from "./Address"
import { loadAddress } from "../Services/address";


function DeliveryAddress() {

    const [address, setaddress] = useState([])

    useEffect(() => {
        // get the list of products from server
        getAddress();
    }, [])

    const getAddress = async () => {
        const response = await loadAddress(sessionStorage.getItem('id'))
        if (response!=null) {
            setaddress(response)
        } else {
            console.log("Something went wrong")
        }
    }


    return <>
        <div>
            <Nav></Nav>
            <desc /><desc />
            <center><h1 class="mb-3">Choose Address</h1></center>
            <div className="container" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div className="table table-responsive">
                    <table className="table table-bordered" style={{ border: "solid" }}>
                        <tr style={{ backgroundColor: "lightblue", height: "50px" }}>
                            <td><h3>Choice</h3></td>
                            <td><h3>Address Line 1</h3></td>
                            <td><h3>Address Line 2</h3></td>
                            <td><h3>City</h3></td>
                            <td><h3>State</h3></td>
                        </tr>
                        {
                            address.map((address) => {
                                return (
                                    <Address address={address}/>
                                )
                            })
                        }
                    </table>
                    <Link className="btn  btn-primary" to="/addAddress" style={{float:'right'}}>Add Address</Link>
                    <div><br/><br/></div>
                </div>
            </div>

        </div>
    </>
}
export default DeliveryAddress;