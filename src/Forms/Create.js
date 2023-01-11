// import login from './login.png'
import React, { useState} from 'react';
import swal from 'sweetalert';
import { useNavigate,Link } from 'react-router-dom';

function Create() {
    const navigate= useNavigate();
    const [details,setDetails]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;
              setDetails(({...details,[name]: value}))

    }

    const submitHandler = (e)=>{
         e.preventDefault();
        //  console.log(details)
        storeForm();
    }

    const storeForm = ()=>{
        let formData = JSON.parse(localStorage.getItem('formData')) ;
        if ( localStorage.getItem('formData') === null){
        formData = [];
        }
        const exists = formData.find(x => x.email === details.email);
          if (exists) {
              return swal(' Email Already Exists', 'Please Try Again!!','error');
              
            } else{
                formData.push(details);
                localStorage.setItem('formData', JSON.stringify(formData)) 
                navigate('/login')       
                 return swal('Successful', 'Account Created Successfully','success');  
            }
            
       } 

    return (
        <form onSubmit={submitHandler} autoComplete='off'>
            <div className="app-head">
                <div className="row">
                    <div className='col-md-6'>

                    </div>
                    
                        <div className="create col-md-4 my-2 rounded p-5" >
                            <h1 className="h1">Create Account  </h1>
                            

                            <div className="form-group">
                                    <label className="form-label">FirstName</label>
                                    <input type="text" name='firstname' value={details.firstname || ''} 
                                    onChange={handleChange} 
                                    className="form-control" placeholder="First Name" required/>
                                </div>
                                        
                                <div className="form-group">
                                    <label className="form-label">LastName</label>
                                    <input type="text" name='lastname' value={details.lastname || ''}
                                    onChange={handleChange} 
                                    className="form-control" placeholder="Last Name" required/>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <input type="email" name='email' value={details.email || ''}
                                    onChange={handleChange} 
                                    className="form-control thing" placeholder="Enter email" required/>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input type="password" name='password' value={details.password || ''} 
                                   onChange={handleChange} 
                                   className="form-control" placeholder="Enter password" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Telephone</label>
                                    <input type="tel" name='telephone' value={details.telephone || ''}
                                    onChange={handleChange} 
                                     className="form-control" placeholder="Telephone" required/>
                                    
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor='country' className="form-label">Country</label>
                                    <input type="text" name='country' id='country'
                                    value={details.country || ''}
                                    onChange={handleChange} 
                                    className="form-control" placeholder="Country" required/>
                                </div>

                                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                <Link className='btn btn-secondary ms-3 mb-3' to='/'>Cancel</Link>
                        </div>

                    </div>
                    </div>
                    </form>
           
            
        );
}

            export default Create;