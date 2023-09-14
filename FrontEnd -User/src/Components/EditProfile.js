import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { registerUser } from '../Services/user'
import { registerAddress } from '../Services/address';
import { getByid } from '../Services/user';
import { updateUser } from '../Services/user';
import Nav from "./Nav"


function Edit() {
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
    }else {
      const response1 = await updateUser(
        firstName,
        lastName,
        email,
        mobile,
        password
      )

      if (response1 != null ) {
        toast.success('Successfully edited user profile')
      } else {
        toast.error('Error while editing, please try again')
      }
    }
  }


  useEffect(() => {
    showUser()
}, []
)

const showUser = async () => {
  debugger
    const response = await getByid(sessionStorage.getItem('id'))
    if (response != null) {
        setfirstName(response['firstName'])
        setlastName(response['lastName'])
        setemail(response['email'])
        setmobile(sessionStorage.getItem('mobile'))
        setpassword(sessionStorage.getItem('password'))
    } else {
        console.log("Something went wrong")
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
      <Nav/>
      <div class="card">
        <div class="card-body" style={ulStyle}>
          <h2 class="text-uppercase text-center">Edit Profile</h2>
          <form>
            <div class="row">
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="firstName">First Name</label>
                  <input type="text" id="firstName" class="form-control form-control-md" value={firstName} style={inStyle}
                    onChange={(e) => { setfirstName(e.target.value) }} />
                </div>

              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-control form-control-md" value={lastName} style={inStyle}
                    onChange={(e) => { setlastName(e.target.value) }} />
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="email">Email</label>
                  <input type="email" id="email" class="form-control form-control-md" value={email} style={inStyle}
                    onChange={(e) => { setemail(e.target.value) }} />
                </div>

              </div>
              <div class="col-md-6 mb-4">

                <div class="form-outline">
                  <label class="form-label" for="mobile">Mobile</label>
                  <input type="number" id="mobile" class="form-control form-control-md" value={mobile} style={inStyle}
                    onChange={(e) => { setmobile(e.target.value) }} />

                </div>

              </div>
            </div>

                        <center>
              <button type="button" class="btn btn-primary btn-md btn-md gradient-custom-4 text-body" onClick={addUser}>Edit</button>
            </center>

          </form>

        </div>
      </div>
    </div>

  )
}

export default Edit;