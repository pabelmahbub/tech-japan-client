
import { useState,useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = ()=>{
            const [user,setUser] = useState({});  
            
           
            const signInWithGoogle = ()=>{
                              signInWithPopup(auth, googleProvider)
                              .then((result) => {
                                  const user = result.user;
                                  setUser(user);
                                  console.log(user);
                              });
            }

            const handleSignOut =()=>{
                              signOut(auth)
                              .then(()=>{})
            }

            useEffect(() => {
               onAuthStateChanged(auth,user=>{
                              setUser(user);
               })
            }, [])
            
            return {user,signInWithGoogle,handleSignOut};
}

export default useFirebase;