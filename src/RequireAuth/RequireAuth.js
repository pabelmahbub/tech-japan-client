import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';


const auth = getAuth(app);

function RequireAuth({children}) {
   const{user} = useFirebase();
   const location = useLocation();
   if(!user){
        return <Navigate to='/login'></Navigate>
   }
  return children;
}

export default RequireAuth