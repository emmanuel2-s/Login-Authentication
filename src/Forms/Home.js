import React from 'react';
import { useState, useEffect } from 'react';
import tiger from './tiger.webp';


function Home() {
  const [visible,setVisible]= useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
    const singleUser = JSON.parse(localStorage.getItem("forms"));
    if(singleUser){
      setVisible(true)
    }else{
      setVisible(false)
    
          }
    setUser(singleUser)
  }, []);

  

  const App = {
    backgroundColor: 'firebrick',
    float: "right",
    padding: '8px',
  }

  return (
    <>

    <div className='wrapper'>
      {visible && <>
      <div>
        <h3 style={App}> Welcome! {user?.firstname}  </h3>
        
      </div> 
     <div className='row animate'>
    
      <div className='col-md-6 mt-3'>
        <img className='image ' src={tiger} width='600px' />
      </div>

      <div className='col-md-6 mt-4 '>
        <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Assumenda nemo fuga soluta possimus dolorum nesciunt laborum ab?<br/>
          Cupiditate magni officiis odit labore dolores, ut esse consequatur expedita quis, ratione dicta?<br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dolorum debitis ut impedit quidem!<br/>
          Hic possimus debitis autem quo modi nemo vel asperiores veniam minus maiores architecto distinctio
          itaque, nulla atque!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Assumenda nemo fuga soluta possimus dolorum nesciunt laborum ab?<br/>
          Cupiditate magni officiis odit labore dolores, ut esse consequatur expedita quis, ratione dicta?<br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dolorum debitis ut impedit quidem!<br/>
          Hic possimus debitis autem quo modi nemo vel asperiores veniam minus maiores architecto distinctio
          itaque, nulla atque!
        </p>
      </div>
    </div>
    {/* <hr/> */}
    <div>
      
    </div></>}
    </div>
    </>
  )
}

export default Home;
