// import login from './project-2.jpg'
import React, {useState} from 'react'
import swal from 'sweetalert'
import  {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { useForm } from 'react-hook-form';



function LoginForm(){

  const navigate = useNavigate();

  // const [remember, setRemember] = useState(false);

    const [users,setUsers]=useState({})
    
    const handleChange =(e)=>{
      const{ name, value} = e.target;
      setUsers(({...users,[name]:value}))
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      if (users){
        swal('Successful Login','Welcome','success');
        storeLogin();

        }
     
    };

  //   const handleUser = (e) =>{
  //     const {value,name} = e.target;
  //     const check = JSON.parse(localStorage.getItem('formData'));
  //     const exists = check.find(x=>x.email === users.email)
  //     if(exists){
  //       return 
  //     }
  //     users.password = exists.password;
  //     setValue("password",exists.password)
  //   }

  //  const handleRemember = (e)=>{
  //   const {value,name,checked}= e.target;
  //   if (checked == true){
  //     setRemember(true)
  //   }else{
  //     setRemember(false)
  //   }
  //  }

  //   const {setValue,formState:{errors}}=useForm({
  //     mode: 'onChange',
  //     reValidateMode: 'onChange'
  // });
    

    const storeLogin= ()=>{
      
      let forms = JSON.parse(localStorage.getItem('formData'))
      if (forms === null) {
        return swal('Wrong Credentials', 'Please Try Again!!','error');
          
      } else {
        const exists = forms.find(x => x.email === users.email && x.password === users.password);
            if (exists) {
            localStorage.setItem('forms', JSON.stringify(exists)) 
            navigate('/home' );
            }else{
            
              return swal('Wrong Credentials', 'Please Try Again!!','error');
            }
             
            }
            
       }

    return(
    <div className="App">
      
      <div className="row">
        <div className="col-md-6">
          {/* <img className="float-right " src={login} width="600" /> */}
        </div>
        <div className="loginh col-md-5  my-auto rounded p-4">
        <h1 className="h1">Login For Access  </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" name='email' value={users.email ||''} className="form-control" placeholder="Enter email"
               onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name='password' value={users.password ||''} className="form-control" placeholder="Enter password" 
              onChange={handleChange} required />
            </div>

            <div className='form-group mb-3'>
         <label><input type='checkbox' name='checkbox'value={users.checkbox}
            onChange={handleChange} /> Remember me</label>
        </div>


            <button type="submit" className="btn btn-primary">Submit</button>
             <br/>
             <br/>
            <Link to='/forgotp' className='link'> Forgot Password?</Link>|
            <Link to='/create' className='link'>Create new account?</Link>
          </form>

        </div>

      </div>

    </div>
  );
    }
    export default LoginForm;