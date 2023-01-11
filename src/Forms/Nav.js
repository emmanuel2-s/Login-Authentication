import React from "react";
import {Link} from 'react-router-dom'
import HomePage from './HomePage';

const link = {
  textDecoration:'none',
  color:'#fff',
  float:'right',
  marginRight:'30px',
  fontSize:"22px"
  
}

function Nav(){
    return(
      <>      
        <nav style={{ backgroundColor:'firebrick', width:'100%',}}>
         
        <Link className="nav-link" style={link} to="/"></Link>
        <Link className="nav-link" style={link} to="/create">Sign up</Link>
        <Link className="nav-link" style={link} to="/login">Login</Link>
        <Link className="nav-link" style={link} to="/home">Home</Link>
        <h1 className="nice">NICE WRITE-<span>UP</span></h1>
      </nav>
      </>

   
    )
}
export default Nav;