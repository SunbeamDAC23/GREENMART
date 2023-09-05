import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { registerUser } from '../Services/user'
import { registerAddress } from '../Services/address';


function Registerpre() {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [mobile, setmobile] = useState('')
  const [password, setpassword] = useState('')
  const [confirm, setconfirm] = useState('')

  const navigate = useNavigate()

  const addUser = async () => {
    if (firstName.length == '') {
      toast.error('Please enter first name')
    } else if (lastName.length == '') {
      toast.error('Please enter last name')
    } else if (email.length == '') {
      toast.error('Please enter email')
    } else if (mobile.length == '') {
      toast.error('Please enter mobile')
    } else if (password.length == '') {
      toast.error('Please enter password')
    }else if (password!=confirm) {
      toast.error('Password dont match')
    }
    else {
      const response1 = await registerUser(
        firstName,
        lastName,
        email,
        password,
        mobile
      )

      if (response1 != null ) {
        toast.success('Successfully registered a new user')
      } else {
        toast.error('Error while registering a new user, please try again')
      }
    }
  }

  const ulStyle = {
    border: '2px solid green', borderRadius: 10, width: '55%', listStyleType: 'none',
    marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'lightgreen',marginTop:'50px'
  }
  const inStyle = { height: '30px' }
  return (
    <div>
      <ToastContainer />
      <div class="card">
        <div class="card-body" style={ulStyle}>
          <h2 class="text-uppercase text-center">Create an account</h2>
          <form>
            <div class="row">
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="firstName">First Name</label>
                  <input type="text" id="firstName" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setfirstName(e.target.value) }} />
                </div>

              </div>
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setlastName(e.target.value) }} />
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="email">Email</label>
                  <input type="email" id="email" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setemail(e.target.value) }} />
                </div>

              </div>
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="mobile">Mobile</label>
                  <input type="number" id="mobile" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setmobile(e.target.value) }} />

                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="password">Password</label>
                  <input type="password" id="password" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setpassword(e.target.value) }} />
                </div>

              </div>
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="line1">Confirm Password</label>
                  <input type="text" id="line1" class="form-control form-control-md" style={inStyle}
                    onChange={(e) => { setconfirm(e.target.value) }} />
                </div>

              </div>
            </div>

                        <center>
              <button type="button" class="btn btn-primary btn-md gradient-custom-4 text-body" onClick={addUser}>Register</button>
            </center>


            <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/"
              class="fw-bold text-body"><u>Login here</u></a></p>

          </form>

        </div>
      </div>
    </div>

  )
}

export default Registerpre;