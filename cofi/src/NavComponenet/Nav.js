import './Nav.css';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

function Nav() {
 const[NavComponent,setNavComponent]=useState()
 useEffect(()=>{
   setInterval(()=>{
if(localStorage.getItem("role")=="admin")
{
   setNavComponent(<div class="header_section">
   <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="logo"><a href="index.html"><img src="assets/images/logo2.png"/></a></div>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a ><Link to="/admin" class="nav-link" >AdminHome</Link></a>
               </li>
               <li class="nav-item">
                  <a ><Link to="/manageuser" class="nav-link" >Manage User</Link></a>
               </li>
               <li class="nav-item">
                  <a ><Link to="/logout" class="nav-link" >Logout</Link></a>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</div>)
}
else if(localStorage.getItem("role")=="user")
{
   setNavComponent(<div class="header_section">
   <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="logo"><a href="index.html"><img src="assets/images/logo2.png"/></a></div>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a ><Link to="/user" class="nav-link" >UserHome</Link></a>
               </li>
               <li class="nav-item">
                  <a ><Link to="/logout" class="nav-link" >Logout</Link></a>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</div>)
}
else
{
   setNavComponent(<div class="header_section">
   <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="logo"><a href="index.html"><img src="assets/images/logo2.png"/></a></div>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item active">
                  <a ><Link to="/" class="nav-link" >Home</Link></a>
               </li>
               
               <li class="nav-item">
               <a ><Link to="/services" class="nav-link" >Services</Link></a>
               </li>
               <li class="nav-item">
                  <a ><Link to="/register" class="nav-link" >Register</Link></a>
               </li>
               <li class="nav-item">
                  <a ><Link to="/login" class="nav-link" >Login</Link></a>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</div>)
}
   },2000)
 },[])

  return (
    <div className="Header">
    {NavComponent}
    </div>
  );
}

export default Nav;
