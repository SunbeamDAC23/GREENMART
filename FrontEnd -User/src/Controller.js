import {Routes,Route,BrowserRouter } from "react-router-dom";
import Addproduct from "./Components/Cart";
import Deliveryaddress from "./Components/deliveryaddress";
import Invoice from "./Components/Invoice";
import Register from "./Components/Rgisteration";
import Login from "./Components/Login";
import Viewproduct from "./Components/ViewProduct";
import ChangePassword from "./Components/ChangePassword";
import SearchPage from "./Components/SearchPage";
import OrderHistory from "./Components/OrderHistory";
import Productdesc from "./Components/productdescription";
import Myprofile from "./Components/MyProfile"
import Contactus from "./Components/Contactus"
import AddAddress from "./Components/AddAdress"
import HomeNav from "./Components/HomeNav";
import EditProfile from "./Components/EditProfile"
import Paymentgate  from "./Components/PaymentGateway"


function Controller()
{
   return(
   <BrowserRouter>
   <Routes>
    <Route path="/as" element={<Login/>}/>
    <Route path="/deliveryaddress" element={<Deliveryaddress/>}/>
    <Route exact path="/invoice" element={<Invoice/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/Viewproduct" element={<Viewproduct/>}/>
    <Route exact path="/addproduct" element={<Addproduct/>}/>
    <Route exact path="/ChangePassword" element={<ChangePassword/>}/>
    <Route exact path="/SearchPage" element={<SearchPage/>}/> 
    <Route exact path="/OrderHistory" element={<OrderHistory/>}/>   
    <Route exact path="/Productdesc" element={<Productdesc/>}/>   
    <Route exact path="/invoice" element={<Invoice/>}/>
    <Route exact path="/myprofile" element={<Myprofile/>}/>
    <Route exact path="/contactus" element={<Contactus/>}/>
    <Route exact path="/addAddress" element={<AddAddress/>}/>
    <Route exact path="/" element={<HomeNav/>}/>
    <Route exact path="/editprofile" element={<EditProfile/>}/>
    <Route exact path="/payment" element={<Paymentgate/>}/>
   </Routes>   
   </BrowserRouter>
   )
}
export default Controller;