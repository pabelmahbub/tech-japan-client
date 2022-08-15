import React from 'react'
import useFirebase from '../hooks/useFirebase';

function Login() {
  const {signInWithGoogle} = useFirebase();
  return (
    <div style={{display: 'flex',justifyContent: 'center',height:"100vh"}}>
        <div>
           <h2 style={{paddingBottom:"10px",paddingTop:"20px"}}>Login</h2>
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
              onClick={signInWithGoogle}
              >Google Sign In</button>
       </div>
    </div>
  )
}

export default Login;