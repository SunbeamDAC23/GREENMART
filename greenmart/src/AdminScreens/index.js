import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashBoard from './AdminDashboard';
import Category from './Category';
import ChangePassword from './ChangePassword';
import Product from './Product';
import ViewUsers from './ViewUsers';
import AddProduct from './AddProduct';
import AddCategory from './AddCategory';
import Orders from './Orders';
import Login from '../LoginScreens/Login';
import Register from '../LoginScreens/Register';
function Controller() {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={AdminDashBoard}/>
                <Route exact path="/Category" component={Category}/>
                <Route exact path="/Product" component={Product}/>
                <Route exact path="/ViewUsers" component={ViewUsers}/>
                <Route exact path="/ChangePassword" component={ChangePassword}/>
                <Route exact path="/AddProduct" component={AddProduct}/>   
                <Route exact path="/AddCategory" component={AddCategory}/> 
                <Route exact path="/Orders" component={Orders}/> 
                <Route exact path="/Login" component={Login}/>   
                <Route exact path="/Register" component={Register}/>             
            </Switch>
        </Router>
    );
}

export default Controller;