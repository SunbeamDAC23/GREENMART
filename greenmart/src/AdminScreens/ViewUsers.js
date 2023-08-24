import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import { useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../app.css'

function ViewUsers() {
    
    const [users , setUsers] = useState([
        {
            userId : 1,
            imagePath : "http://localhost:3000/images/male.jpg",
            firstname : "Abhi",
            lastname : "Jain",
            Contact : 8888914347,
            email : "aj@gmail.com",
            City : "Pune"
        },
        {
            userId : 2,
            imagePath : "http://localhost:3000/images/male.jpg",
            firstname : "Bhushan",
            lastname : "Desale",
            Contact : 2568741364,
            email : "bd@gmail.com",
            City : "Mumbai"
        },
        {
            userId : 3,
            imagePath : "http://localhost:3000/images/female.jpg",
            firstname : "Rutuja",
            lastname : "Khatane",
            Contact : 2567418952,
            email : "rk@gmail.com",
            City : "SNagar"
        },
        {
            userId : 4,
            imagePath : "http://localhost:3000/images/male.jpg",
            firstname : "Shri",
            lastname : "Jondhale",
            Contact : 9785204896,
            email : "sj@gmail.com",
            City : "Sangamner"
        },
        {
            userId : 5,
            imagePath : "http://localhost:3000/images/male.jpg",
            firstname : "Shubham",
            lastname : "Patil",
            Contact : 5972154785,
            email : "sp@gmail.com",
            City : "Kolhapur"
        },
    ])
    return ( <>
    <Sidebar></Sidebar>
    <div className='main'>
        <table className='table table-bordered table-responsive'>
            <tbody>
               <tr>
               <th>S. No</th>
                <th>Image</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Contact</th>
                <th>Email</th>
                <th>City</th>
                <th>Action</th>
               </tr>
               {
                users.map((user, key) => {
                    return <tr key={user.userId}>
                        <td><h4>{user.userId}</h4></td>
                        <td><img src={user.imagePath} className='imageStyle'></img></td>
                        <td>{user.firstname}</td>        
                        <td>{user.lastname}</td>
                        <td>{user.Contact}</td>
                        <td>{user.email}</td>
                        <td>{user.City}</td>
                        <td><button className='btn btn-sm btn-danger'>Delete</button></td>
                    </tr>
                })
               }
            </tbody>
        </table>
    </div>
    </> );
}

export default ViewUsers;