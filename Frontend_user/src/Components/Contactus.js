import { useEffect, useState } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import background from '../vegetables.jpg'
import Nav from './Nav';

import Login from './Login';
function ChangePassword() {

  const navigate = useNavigate()
  const login = () => {
    navigate('/')
  }

  const inStyle = { height: '40px' }

  debugger;
  return (
    <div>
      <Nav></Nav>
        <br/><desc /><desc />
      <table>
        <tr>
        <td><h2>Address:</h2></td>
        <td><p>"Sunbeam IT Park", Second Floor, Phase 2 of Rajiv Gandhi Infotech Park,Hinjawadi, Pune - 411057, MH-INDIA</p></td>
        </tr>
        <br/>       
        <tr>
        <td><h2>Contact:</h2></td>
        <td>12345678</td>
        </tr>
        <br/>
        <tr>
        <td><h2>Mail:</h2></td>
        <td>greenmart@gmail.com</td>
        </tr>
        </table>
    </div>
  )
}

export default ChangePassword;