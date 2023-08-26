import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import Nav from './Nav';
import { changePassword } from '../Services/user';


function ChangePassword() {
  const [newpass, setnewpass] = useState('')
  const [confirmpass, setconfirmpass] = useState('')

  const navigate = useNavigate()
  const firstName = sessionStorage.getItem('firstName')
  const lastName = sessionStorage.getItem('lastName')
  const email = sessionStorage.getItem('email')
  const mobile = sessionStorage.getItem('mobile')
  const changepassword = async () => {
    debugger
    if (newpass.length === '') {
      toast.error('Please enter new password')
    } else if (confirmpass.length === '') {
      toast.error('Please enter confirm password')
    } else if (newpass != confirmpass) {
      toast.error('Passwords dont match')
    } else {
      const response = await changePassword(firstName, lastName, email, mobile, newpass)
      if (response != null) {
        navigate('/')
      } else {
        toast.error('Something went wrong')
      }

    }
  }

  const ulStyle = {
    border: '2px solid green', borderRadius: 10, width: '55%', listStyleType: 'none',
    marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'lightgreen', backgroundImage: ''
  }
  const inStyle = { height: '40px' }
debugger
  return (
    <div>
      <ToastContainer />
      <Nav></Nav>
      <br /><desc /><desc />
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div >
            <div>
              <div class="card">
                <div class="card-body p-5" style={ulStyle}>
                  <h2 class="text-uppercase text-center mb-5">Change Password</h2>
                  <form>
                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example1cg" class="form-control form-control-md" style={inStyle}
                        onChange={(e) => { setnewpass(e.target.value) }} />
                      <label class="form-label" for="form3Example1cg">New-Password</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example1cg" class="form-control form-control-md" style={inStyle}
                        onChange={(e) => { setconfirmpass(e.target.value) }} />
                      <label class="form-label" for="form3Example1cg">Confirm-Password</label>
                    </div>
                    <Link class="btn btn-warning" to="/SearchPage" style={{ float: 'left' }}>Back</Link>
                    <button class="btn btn-primary" onClick={changepassword} style={{ marginLeft: '150px' }}>Reset</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;