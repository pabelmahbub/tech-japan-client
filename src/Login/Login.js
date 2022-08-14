import React from 'react'
import useFirebase from '../hooks/useFirebase';

function Login() {
  const {signInWithGoogle} = useFirebase();
  return (
    <div>
           <h1>Pls login.</h1>
           <div style={{margin:'20px'}}>
            <button onClick = {signInWithGoogle}>Google sign In</button>
           </div>

           <form>
                <input  type='email' placeholder='your email'/>
                <br></br>
                <input  type='password' name="" id="" placeholder='password'/>
                <br></br>
                <input  type='submit' value='login'/>
             </form>
    </div>
  )
}

export default Login;