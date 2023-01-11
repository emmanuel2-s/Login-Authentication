import React,{useState} from "react";
import {Link} from 'react-router-dom';
import swal from "sweetalert";
import {useForm} from 'react-hook-form'


function ForgotP(){
    const [visible,setVisible]=useState(false);
    const [fpass,setFpass] = useState({email:'', password:''})

    const handleChange=(e)=>{
        const {name,value}=e.target;
      if(name == 'email'){
        const forgot =JSON.parse(localStorage.getItem('formData'))
        const exist = forgot?.find(x => x.email === value);
          if (exist){
         setVisible(true)
          }else{
            setVisible(false)
            setValue("newpassword",'')
            fpass.password = "";
          }
          
      }
        setFpass(({...fpass,[name]:value}))
    }
     
    
    const {setValue,register,handleSubmit,formState:{errors}}=useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const onSubmit =()=>{

        const forgot = JSON.parse(localStorage.getItem('formData'))
       const users= forgot.find(x => x.email === fpass.email);
    users.password= fpass.password

       localStorage.setItem('formData', JSON.stringify(forgot))
       return swal('Successful', 'Password Changed', 'success')

       }
    


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="heading">
           <div className="row">
            <div className="crt p-5 rounded">
                <h2 className='h2'>Forgotten password !!</h2>
                <p>An email will be sent to ur email address.</p>
                <p>Click on verify to reset your old password :)</p>
            <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email address" 
                        onChange={handleChange} />
                    </div>

                   {visible && <>
                    <div className="mb-3">
                    
                        <label className="form-label">New Password</label>
                        <input {...register('password',{required:true})} 
                        type="password" name="password" className="form-control" placeholder="New password"
                         onChange={handleChange} />
                    </div>
                    
                    <button type='submit' className='btn btn-secondary'>Confirm</button>
                    </>}
                    <br/>
                    <br/>
                    <Link className="passr" to="/passwordr">Password Reset?</Link>
                    </div>
                    </div>
        </div>
        </form>
    )
}

export default ForgotP;