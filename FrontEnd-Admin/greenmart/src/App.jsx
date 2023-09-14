import { Dashboard } from "./components/Dashboard";
import './app.css'
import './index.css'
import { Switch,Route,BrowserRouter as Router } from "react-router-dom";
import { Orders} from "./components/Orders";
//import { Login } from "./components/Login";
import { Products } from "./components/Products";
import {Users} from "./components/Users";
import { Profile } from "./components/Profile";
import { UserAddress } from "./components/UserAddress";
import { UserOrders } from "./components/UserOrders";
import { Categories } from "./components/Categories";
import { NewProduct } from "./components/NewProduct";
import { ProductImageAdd } from "./components/ProductImageAdd";
import { ProductsByCategory } from "./components/ProductsByCategory";
import { EditProduct } from "./components/EditProduct";
import Login from "./components/Login";


function App() {
  

return(
                <Router>
              
              <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/admin/dashboard" component={Dashboard}/>
              <Route exact path="/admin/orders" component={Orders}/>
              <Route exact path="/admin/products" component={Products}/>
              <Route exact path="/admin/profile" component={Profile}/>
              <Route exact path="/admin/users" component={Users}/>
              {/* <Route exact path="/admin/logout" component={Login}/> */}
              <Route exact path="/admin/users/userAddress/:userId" component={UserAddress}/>
              <Route exact path="/admin/users/userOrders/:userId" component={UserOrders}/>
              <Route exact path="/admin/categories" component={Categories}/>
              <Route exact path="/admin/products/newproduct" component={NewProduct}/>
              <Route exact path="/admin/newproduct/image" component={ProductImageAdd}/>
              <Route exact path="/admin/category/products/:cId" component={ProductsByCategory}/>
              <Route exact path="/admin/products/edit/:pid" component={EditProduct}/>
              </Switch>
                              
            </Router>             
   
)    
}
export default App;
