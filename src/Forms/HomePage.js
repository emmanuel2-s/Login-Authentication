import React from 'react';
import Ai from './Ai.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home-page'>

        <div className='wrap'>
            <img className='img' src={Ai} />
            <h1 className='nice-write'>NICE WRITE-<span>UP</span></h1>
        </div>
        <div className='Btn'>
       <Link to='/login'><button className='btn btn-primary me-5' type='button'>LOGIN</button></Link>
       <Link to='/create' className='btn btn-secondary' type='button'>SIGN UP</Link>
        </div>
    </div>
  )
}

export default HomePage
