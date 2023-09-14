import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { registerAddress } from '../Services/address';
import Nav from './Nav'

function AddAddress() {
    const [line1, setline1] = useState('')
    const [line2, setline2] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [pincode, setpincode] = useState('')
    const userId=sessionStorage.getItem('id')
    const navigate = useNavigate()

    const addUser = async () => {
       
        if (line1.length == '') {
            toast.error('Please enter line1')
        } else if (line2.length == '') {
            toast.error('Please enter line2')
        } else if (city.length == '') {
            toast.error('Please enter city')
        } else if (state.length == '') {
            toast.error('Please enter state')
        } else if (pincode.length == '') {
            toast.error('Please enter password')
        } 
        else {
            const response1 = await registerAddress(
              line1,line2,city,state,pincode,userId
            )

            if (response1 != null) {
                toast.success('Successfully added new address')
            } else {
                toast.error('Error while new address, please try again')
            }
        }
    }

    const ulStyle = {
        border: '2px solid green', borderRadius: 10, width: '55%', listStyleType: 'none',
        marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'lightgreen', marginTop: '50px'
    }
    const inStyle = { height: '30px' }
    return (
        <div>
            <ToastContainer />
            <Nav/>
            <div class="card">
                <div class="card-body" style={ulStyle}>
                    <h2 class="text-uppercase text-center">Add Address</h2>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
    
                                    <input placeholder='Line1' type="text" id="line1" class="form-control form-control-md" style={inStyle}
                                        onChange={(e) => { setline1(e.target.value) }} />
                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input placeholder='Line2' type="text" id="line2" class="form-control form-control-md" style={inStyle}
                                        onChange={(e) => { setline2(e.target.value) }} />
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input placeholder='City' type="text" id="city" class="form-control form-control-md" style={inStyle}
                                        onChange={(e) => { setcity(e.target.value) }} />
                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input placeholder='State' type="text" id="state" class="form-control form-control-md" style={inStyle}
                                        onChange={(e) => { setstate(e.target.value) }} />

                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input placeholder='Pincode' type="number" id="pincode" class="form-control form-control-md" style={inStyle}
                                        onChange={(e) => { setpincode(e.target.value) }} />

                                </div>

                            </div>
                        </div>
                        <center>
                        <Link className='btn btn-warning' to="/SearchPage" style={{float:'left'}}>Back</Link>
                        <Link className='btn btn-primary' onClick={addUser} style={{float:'rigth'}}>Add Address</Link>
                        </center>

                    </form>

                </div>
            </div>
        </div>

    )
}

export default AddAddress;