import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Services/user";
import user from '../user.webp'

function MyProfile() {
    const [users, setusers] = useState([])
    const [user1, setuser1] = useState('')
    useEffect(() => {
        showUser()
    }, []
    )

    const showUser = async () => {
        const response = await getUser()
        if (response != null) {
            setusers(response)
            users.map((user) => { setuser1(user) })
        } else {
            console.log("Something went wrong")
        }
    }

    return (<>
    <Nav/>
    <div style={{marginTop:'-50px'}}>
        <section class="vh-100">
             <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100" >
                    <div class="col col-lg-6 mb-4 mb-lg-0" >
                        <div class="card mb-3" style={{ borderRadius: 10, backgroundColor: 'lightgreen' }} >
                            <div class="row g-0">
                                <div class="col-md-4 gradient-custom text-center text-white">
                                    <img src={user}
                                        alt="Avatar" class="img-fluid my-5" style={{ width: '80px' }} />
                                    <h5 style={{ color: 'black' }}>Username</h5>
                                    <p style={{color:'blue'}}>{sessionStorage.getItem('firstName')}</p>
                                    <i class="far fa-edit mb-5"></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body p-4">
                                        <h6>Information</h6>
                                        <hr class="mt-0 mb-4" />
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h6>FirstName</h6>

                                                <p style={{color:'blue'}}>{sessionStorage.getItem('firstName')}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h6>LastName</h6>

                                                <p style={{color:'blue'}}>{sessionStorage.getItem('lastName')}</p>
                                            </div>
                                        </div>
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h6>Email</h6>

                                                <p style={{color:'blue'}}>{sessionStorage.getItem('email')}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h6>Phone</h6>

                                                <p style={{color:'blue'}}>{sessionStorage.getItem('mobile')}</p>
                                            </div>
                                        </div>
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h6>Address</h6>
                                                <p class="text-muted">xxxxxxxx</p>
                                            </div>
                                        </div>
                                        <div class="row pt-1">
                                        <Link className="btn btn-primary" style={{float:'left'}} to="/editprofile">Edit</Link>
                                        <Link className="btn btn-warning" style={{float:'rigth'}} to="/SearchPage">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div></>)
}
export default MyProfile;