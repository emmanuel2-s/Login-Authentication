import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import LoginForm from './Forms/Login';
import Create from './Forms/Create';
import PasswordR from './Forms/PasswordR';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ForgotP from './Forms/ForgotP';
import Nav from './Forms/Nav'
import Home from './Forms/Home';
import HomePage from './Forms/HomePage';

function App() {
  
  // const [text, setText]=useState('')
//   function handleChange(e: React.KeyboardEvent<HTMLInputElement>){
// console.log(e.currentTarget.value)
// setText(e.currentTarget.value)
//   }


  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Nav/>
      
      
      <Routes>
      <Route exact path="/" element={<HomePage />} />
     
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/passwordr" element={<PasswordR />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/forgotp" element={<ForgotP />} />
      </Routes>

      </BrowserRouter> 
           

        </div>

  )
}

export default App;
