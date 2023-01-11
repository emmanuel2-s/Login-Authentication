import React, {useState} from 'react'
import axios from 'axios'

function FetchApi() {

const [user,setUser] = useState([]);

  async function handleClick(){
         var response = await fetch('https://jsonplaceholder.typicode.com/users')
         console.log(await response.json())
    }

const handleAxios=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        console.log(response.data)
        setUser(response.data)
    })
        .catch(err=>console.log(err))
      
}

const arrUser =  user.map(data=>{
    return <ul>
        <li> Username: {data.username}</li>
        <li>Email: {data.email}</li>
        <li>Website: {data.website}</li>
        <li>Phone: {data.phone}</li>
    </ul>
})

  return (
    <>
    <div>
        <h1>HTTP MODULES</h1>
        <br/>
      <h1>Using Fetch</h1>
      <button className='btn btn-secondary'
       onClick={handleClick}>Get Data using fetch</button>
    </div>
     <br/>
    <div>
        <h1>Using Axios</h1>
        <button className='btn btn-primary' 
        onClick={handleAxios} >Get Data using axios</button>
        {arrUser}
    </div>
    </>
  )
}

export default FetchApi;
