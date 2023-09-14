
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { authenticate } from "../services/Admin";


function Login() {
const history=useHistory()
const [email,setemail]=useState('')
const [password,setpassword]=useState('')

  

  const Login = async () => {
      const response=await authenticate(email,password)
      if(response!=null && response['status']===200)
      {
        const{id,firstName,lastName,email,mobile}=response['data']
        sessionStorage['id']=id;
        sessionStorage['firstName']=firstName;
        sessionStorage['lastName']=lastName;
        sessionStorage['email']=email;
        sessionStorage['mobile']=mobile;
        history.push('/admin/dashboard')
      }else
      {
       toast.error('Invalid Username or Password')
      }
  }

 
  const ulStyle = {
    border: '2px solid green', borderRadius: 10,width: '45%', listStyleType: 'none',
    marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'lightgreen',marginTop:'20px'
  }
  const inStyle = { height: '40px' }
  const divStyle={backgroundColor:'bisque' ,height:'100vh',width:'100vw'}
  return (
        <div>
          <ToastContainer/> 
              <div className="card">
              <div className="container" style={divStyle}>
                <div className="card-body text-center" style={ulStyle}>
                  <br/>
                  {/* <center><img className="rounded-circle" src={} alt="Cinque Terre" style={{width:'150px',height:'100px'}}/></center> */}
                  <h2 className="mb-5">Admin Login</h2>
                  <h6>Please enter your email and password!</h6>
                  <br/>
                  <div className="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email" style={inStyle} onChange={(e) => { setemail(e.target.value) }}/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" style={inStyle} onChange={(e) => { setpassword(e.target.value) }}/>
                  </div>

                  <button onClick={Login} class="btn btn-primary btn-md " type="submit">Login</button>

                  <div>
                    {/* <p class="mb-0">Don't have an account? <a onClick={Signin} class="fw-bold text-body">Sign Up</a>
                    </p> */}
                  </div>
                </div>
              </div>
              </div>
        </div>
  );
}

export default Login;

