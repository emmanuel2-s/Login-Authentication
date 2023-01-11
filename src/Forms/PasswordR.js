import React, { useState } from 'react'
import ppp from './password.png'
import swal from 'sweetalert';

function PasswordR() {

    const [user,setUser]= useState({});

    const handler = (e)=>{
      const {name,value} = e.target;
      setUser(({...user,[name]:value}))
    };

const handleSubmit= ()=>{
    // e.preventDefault();
    
        const person = JSON.parse(localStorage.getItem('forms'));
        const forgot = JSON.parse(localStorage.getItem('formData'))
       const users= forgot.find(x => x.email === person.email);

        if(person.password !== user.oldPassword){
            return swal('Wrong Credential', 'Old Password Not Correct', 'error')
        }
        
        if (user.newPassword !== user.comfirmPassword){

            return swal('Wrong Credential', 'Password Do Not Match', 'error')

        }
        users.password= user.newPassword
        localStorage.setItem('formData', JSON.stringify(forgot))
        return swal('Successful', 'Password Reset', 'success')

    }



    return (
        <form onSubmit={handleSubmit}>
        <div className="header">

            <div className='row'>
                
                <div className='created p-5 rounded'>
                <img className='ppp' src={ppp} />
                <h3 className='h3'> Password Reset</h3>
                    <div className="mb-4">
                        <label className="form-label">Old password</label>
                        <input type="password" name='oldPassword'
                        onChange={handler}
                         className="form-control" placeholder="Enter old password"
                         required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" name='newPassword' 
                        onChange={handler}
                        className="form-control" placeholder="New password"
                        required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name='comfirmPassword'
                        onChange={handler} 
                        className="form-control" placeholder="Confirm password"
                        required />
                    </div>
                    <button type="submit" className="btn btn-primary">Continue</button>

                </div>

            </div>

        </div>
        </form>
    )
}

export default PasswordR;