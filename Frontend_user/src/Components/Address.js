import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import constants from '../Utils/constants'
import { useNavigate } from 'react-router-dom'


export function AddressItem({ address }) {
const navigate=useNavigate()
  const addToCart = async () => {
    
  }

  const proceed= () => {
   sessionStorage['line1']=address['line1']
   sessionStorage['line2']=address['line2']
   sessionStorage['city']=address['city']
   sessionStorage['state']=address['state']
   sessionStorage['pincode']=address['pincode']
    navigate('/Invoice')
}

  return (
    <tr style={{ height: "50px" }}>
                                        <td>
                                            <button className='btn btn-warning btn-sm' onClick={proceed}>Choose</button>
                                        </td>
                                        <td>{address['line1']}</td>
                                        <td>{address['line2']}</td>
                                        <td>{address['city']}</td>
                                        <td>{address['state']}</td>
                                    </tr>
  )
}

export default AddressItem