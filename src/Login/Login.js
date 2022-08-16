import React from 'react'
import useFirebase from '../hooks/useFirebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';

const  auth = getAuth(app);

function Login() {
  const {signInWithGoogle,user} = useFirebase(auth);
  //to replace router

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn =() =>{
    signInWithGoogle()
    .then(()=>{
        navigate(from, {replace:true})
    })
  }
  return (
    <div style={{display: 'flex',justifyContent: 'center',height:"100vh"}}>
        <div>
           <h2 style={{paddingBottom:"10px",paddingTop:"20px"}}>{user? "You are logged in." : 'Login/Register'}</h2>
           <form onSubmit="">
                <input style={{marginBottom:"5px",width:"300px",padding:'5px'}}type='email' placeholder='Your email'></input>
                <br></br>
                <input style={{marginBottom:"5px",width:"300px",padding:'5px'}}type='password' placeholder='password here'></input>
                <br></br>
                <br></br>
                <input style={{backgroundColor:'orange',width:"100px",borderRadius:'5px',padding:'3px',color:'#fff',fontWeight:600,fontSize:'20px'}} type="submit" value='submit' />
            </form>    
            {/* <p>New to Tech-Japan? <Link to='/register'>Create Account</Link></p> */}

            <h3>--------or---------</h3>
            <button className='btn-regular'
              onClick={handleGoogleSignIn}
              >Google Sign In</button>
       </div>
    </div>
  )
}

export default Login;